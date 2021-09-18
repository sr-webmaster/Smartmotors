<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Elasticsearch\Vehicle as VehicleElasticsearch;
use Laravel\Passport\Passport;

class VehiclesTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    protected function getElasticsearchResponse()
    {
        return [
            "took" => 113,
            "timed_out" => false,
            "hits" => [
                "total" => [ "value" => 2 ],
                "max_score" => 1,
                "hits" => [
                    [
                        "_index" => "vehicle",
                        "_id" => "4222ad753f914e20a4f7d63e5c4b35c0",
                        "_score" => 1,
                        "_source" => [
                            "Id" => "9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0",
                            "VehicleId" => "4222ad753f914e20a4f7d63e5c4b35c0",
                            "VehicleKey" => "TEST191130B",
                        ]
                    ],
                    [
                        "_index" => "vehicle",
                        "_id" => "c7f0e8729a8941c48fd33feb8cda74da",
                        "_score" => 1,
                        "_source" => [
                            "Id" => "9991.qa/c7f0e8729a8941c48fd33feb8cda74da",
                            "VehicleId" => "c7f0e8729a8941c48fd33feb8cda74da",
                            "VehicleKey" => "TEST191130B",
                        ]
                    ]
                ]
            ]
        ];
    }

    public function testGetList()
    {
        $elasticsearchMock = $this->mock(VehicleElasticsearch::class);
        $elasticsearchMock->shouldReceive('search')->andReturn($this->getElasticsearchResponse());

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/vehicles?filter[ids][]=4222ad753f914e20a4f7d63e5c4b35c0"
            . "&filter[ids][]=c7f0e8729a8941c48fd33feb8cda74da");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure(['data'])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(2, count($data));
        $this->assertEquals('4222ad753f914e20a4f7d63e5c4b35c0', $data[0]['_source']['VehicleId']);
    }

    public function testShow()
    {
        $vehicle = [
            "Id" => "9991.qa/4222ad75-3f91-4e20-a4f7-d63e5c4b35c0",
            "VehicleId" => "4222ad753f914e20a4f7d63e5c4b35c0",
            "VehicleKey" => "TEST191130B",
        ];

        $elasticsearchMock = $this->mock(VehicleElasticsearch::class);
        $elasticsearchMock->shouldReceive('find')->andReturn($vehicle);

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/vehicles/4222ad753f914e20a4f7d63e5c4b35c0");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure(['data'])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals($vehicle, $data);
    }
}
