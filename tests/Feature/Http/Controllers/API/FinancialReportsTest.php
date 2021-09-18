<?php

namespace Tests\Feature\Http\Controllers\API;

use App\Models\FinancialReport;
use App\Models\Modifier;
use App\User;
use Illuminate\Foundation\Testing\Assert;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Carbon;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class FinancialReportsTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetListDefaultSort()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $reports = factory(FinancialReport::class, 3)->create();

        $response = $this->json('get', "/api/financial-reports");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->json('data');

        $d1 = new Carbon($data[0]['created_at']);
        $d2 = new Carbon($data[1]['created_at']);
        $d3 = new Carbon($data[2]['created_at']);
        $this->assertNotEmpty($data);
        $this->assertTrue($d1->gt($d2));
        $this->assertTrue($d2->gt($d3));
        $this->assertArrayHasKey('name', $data[0]);
        $this->assertArrayHasKey('filters', $data[0]);
    }

    public function testFilterByName()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        factory(FinancialReport::class, 5)->create();

        $report = factory(FinancialReport::class)->create([
            'name' => 'name-to-find'
        ]);

        $response = $this->json('get', "/api/financial-reports/?filter[name]=name-to-find");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(1, count($data));

        $this->assertArraySubset([
            'id' => $report->id,
            'name' => $report->name
        ], $data[0]);
    }

    public function testGetListWithPagination()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        factory(FinancialReport::class, 50)->create();

        $response = $this->get('api/financial-reports?page[size]=5&page[number]=1');
        $this->assertSuccess($response);
        $data = $response->json('data');
        $meta = $response->json('meta');

        $this->assertCount(5, $data);
        $this->assertEquals(5, $meta['per_page']);
        $this->assertEquals(50, $meta['total']);
        $this->assertEquals(10, $meta['last_page']);
        $this->assertEquals(1, $meta['current_page']);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testPost()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $this
            ->json('post', "/api/financial-reports", [])
            ->assertStatus(422);

        $modifier1 = factory(Modifier::class)->create();
        $modifier2 = factory(Modifier::class)->create();
        $report = factory(FinancialReport::class)->make();
        $inputs = $report->toArray();
        $inputs['modifier_1_id'] = $modifier1->id;
        $inputs['modifier_2_id'] = $modifier2->id;
        $response = $this->json('post', "/api/financial-reports", $inputs);
        $this->assertNotExceptionResponse($response);
        $data = $response
            ->assertStatus(201)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertDatabaseHas('financial_reports', [
            'name' => $report->name,
            'modifier_1_id' => $modifier1->id,
            'modifier_2_id' => $modifier2->id
        ]);

        $this->assertArraySubset([
            'name' => $report->name,
            'modifier_1' => [
                'id' => $modifier1->id,
                'name' => $modifier1->name,
                'resource_name' => $modifier1->resource_name,
                'label' => $modifier1->label,
                'placeholder' => $modifier1->placeholder,
            ],
            'modifier_2' => [
                'id' => $modifier2->id,
                'name' => $modifier2->name,
                'resource_name' => $modifier2->resource_name,
                'label' => $modifier2->label,
                'placeholder' => $modifier2->placeholder,
            ],
            'filters' => json_decode($report->filters, true)
        ], $data);

        $report = factory(FinancialReport::class)->make();
        $inputs = $report->toArray();
        $inputs['modifier_1_id'] = $modifier1->id;
        $inputs['modifier_2_id'] = $modifier2->id;
        $response = $this->json('post', "/api/financial-reports", $inputs);
        $this->assertNotExceptionResponse($response);
        $data = $response
            ->assertStatus(201)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertDatabaseHas('financial_reports', [
            'name' => $report->name,
            'modifier_1_id' => $modifier1->id,
            'modifier_2_id' => $modifier2->id,
        ]);

        $this->assertArraySubset([
            'name' => $report->name,
            'modifier_1' => [
                'id' => $modifier1->id,
                'name' => $modifier1->name,
                'resource_name' => $modifier1->resource_name,
                'label' => $modifier1->label,
                'placeholder' => $modifier1->placeholder,
            ],
            'modifier_2' => [
                'id' => $modifier2->id,
                'name' => $modifier2->name,
                'resource_name' => $modifier2->resource_name,
                'label' => $modifier2->label,
                'placeholder' => $modifier2->placeholder,
            ],
            'filters' => json_decode($report->filters, true)
        ], $data);
    }

    public function testDelete()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $reports = factory(FinancialReport::class, 5)->create();
        $reportToDelete = $reports[0];

        $response = $this->json('delete', "/api/financial-reports/{$reportToDelete->id}");
        $this->assertNotExceptionResponse($response);

        $data = $response->assertStatus(SymfonyResponse::HTTP_NO_CONTENT);

        $this->assertEquals(4, FinancialReport::count());
        $this->assertEquals(null, FinancialReport::find($reportToDelete->id));
    }
}
