<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\Enums\UserType as UserTypeEnum;
use App\Jobs\ImportDeals;
use App\User;
use FreshinUp\FreshBusForms\Models\Company\Company;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Psr7\Response;
use App\Elasticsearch\Deal as DealElasticsearch;
use FreshinUp\FreshBusForms\Helpers\ExportHelper;
use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Storage;

class DealsTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    protected function getElasticsearchResponse()
    {
        return [
            "took" => 113,
            "timed_out" => false,
            "hits" => [
              "total" => [ "value" => 16 ],
              "max_score" => 1,
              "hits" => [
                [
                  "_index" => "deal",
                  "_id" => "4222ad753f914e20a4f7d63e5c4b35c0",
                  "_score" => 1,
                  "_source" => [
                    "Id" => "9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0",
                    "DealId" => "4222ad753f914e20a4f7d63e5c4b35c0",
                    "DealKey" => "TEST191130B",
                    "DealType" => "Finance"
                  ]
                ],
                [
                  "_index" => "deal",
                  "_id" => "c7f0e8729a8941c48fd33feb8cda74da",
                  "_score" => 1,
                  "_source" => [
                    "Id" => "9991.qa/c7f0e872-9a89-41c4-8fd3-3feb8cda74da",
                    "DealId" => "c7f0e8729a8941c48fd33feb8cda74da",
                    "DealKey" => "TEST191130C",
                    "DealType" => "Finance"
                  ]
                ]
              ]
            ]
        ];
    }

    /**
     * Create a new test instance.
     *
     * @return void
     */

    public function testGetList()
    {
        $elasticsearchMock = $this->mock(DealElasticsearch::class);
        $elasticsearchMock->shouldReceive('search')->andReturn($this->getElasticsearchResponse());

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/sales"
            . "?page[size]=10&page[number]=1&sort=-Id&customer_id=123&sales_rep_id=123"
            . "&filter[type]=1&filter[status][]=1&filter[date_after]=2020-02-02&filter[date_before]=2020-02-02");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure(['data'])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(2, count($data));
    }

    public function testExportCSV()
    {
        $elasticsearchMock = $this->mock(DealElasticsearch::class);
        $elasticsearchMock->shouldReceive('search')->andReturn($this->getElasticsearchResponse());
        
        $exportMock = \Mockery::mock('alias:FreshinUp\FreshBusForms\Helpers\ExportHelper');
        $exportMock->shouldReceive('exportCSV')->with(
            [
                ["9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0"],
                ["9991.qa/c7f0e872-9a89-41c4-8fd3-3feb8cda74da"]
            ],
            ["Id"]
        )->once();

        Storage::shouldReceive('disk')->andReturn(new class() {
            public function put()
            {
            }
            public function temporaryUrl($filename)
            {
                return $filename;
            }
        });

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('post', "/api/sales/v1/export", [
          'filetype' => 'csv',
          'sort' => 'Id',
          'headers' => ['Id']
        ]);
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200);

        $this->assertNotEmpty($data);

        $this->assertContains('report', $data->getContent());
        $this->assertContains('.csv', $data->getContent());
    }

    public function testExportPDF()
    {
        $elasticsearchMock = $this->mock(DealElasticsearch::class);
        $elasticsearchMock->shouldReceive('search')->andReturn($this->getElasticsearchResponse());
        
        $exportMock = \Mockery::mock('alias:FreshinUp\FreshBusForms\Helpers\ExportHelper');
        $exportMock->shouldReceive('exportTablePDF')->once();

        Storage::shouldReceive('disk')->andReturn(new class() {
            public function put()
            {
            }
            public function temporaryUrl($filename)
            {
                return $filename;
            }
        });

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('post', "/api/sales/v1/export", [
          'filetype' => 'pdf',
          'sort' => '-Id',
          'headers' => ['Id']
        ]);
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200);

        $this->assertNotEmpty($data);

        $this->assertContains('report', $data->getContent());
        $this->assertContains('.pdf', $data->getContent());
    }
  
    public function testGetCharts()
    {
        $elasticsearchMock = $this->mock(DealElasticsearch::class);
        $elasticsearchMock
          ->shouldReceive('search')
          ->andReturn(['aggregations' => [
            'Statuses' => [
              'buckets' => [
                [ 'key' => 'cancelled', 'doc_count' => 570 ],
                [ 'key' => 'lead', 'doc_count' => 241 ],
                [ 'key' => 'delivered', 'doc_count' => 58 ],
                [ 'key' => 'prospect', 'doc_count' => 36 ],
                [ 'key' => 'sold', 'doc_count' => 19 ],
                [ 'key' => 'quote', 'doc_count' => 1 ]
              ]
            ],
            'DealGross' => [ 'value' => 5 ],
            'FinanceGross' => [ 'value' => 6 ],
            'AccessoryGross' => [ 'value' => 7 ],
            'FinanceCharges' => [ 'value' => 8 ],
          ]]);

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/aggregations");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure(['data'])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals([
          "DealGross" => [ 'value' => 5 ],
          "FinanceGross" => [ 'value' => 6 ],
          "AccessoryGross" => [ 'value' => 7 ],
          "FinanceCharges" => [ 'value' => 8 ],
          'Statuses' => [
            [ 'key' => 'cancelled', 'doc_count' => 570 ],
            [ 'key' => 'lead', 'doc_count' => 241 ],
            [ 'key' => 'delivered', 'doc_count' => 58 ],
            [ 'key' => 'prospect', 'doc_count' => 36 ],
            [ 'key' => 'sold', 'doc_count' => 19 ],
            [ 'key' => 'quote', 'doc_count' => 1 ]
          ]
        ], $data);
    }

    public function testShow()
    {
        $deal = [
            "Id" => "9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0",
            "DealId" => "4222ad753f914e20a4f7d63e5c4b35c0",
            "DealKey" => "TEST191130B",
            "DealType" => "Finance"
        ];

        $elasticsearchMock = $this->mock(DealElasticsearch::class);
        $elasticsearchMock->shouldReceive('find')->andReturn($deal);

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/sales/4222ad753f914e20a4f7d63e5c4b35c0");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure(['data'])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals($deal, $data);
    }
}
