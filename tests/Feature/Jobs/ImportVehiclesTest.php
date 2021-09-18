<?php

namespace Tests\Feature\Jobs;

use App\Enums\UserType as UserTypeEnum;
use App\Jobs\ImportVehicles;
use App\User;
use FreshinUp\FreshBusForms\Models\Company\Company;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;
use App\Elasticsearch\Vehicle as VehicleElasticsearch;

class ImportVehiclesTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    /**
     * Create a new test instance.
     *
     * @return void
     */

    public function testImportUsers()
    {
        $vehicles = [
            [
                "Id" => "9991.qa/76c5ba08-edbc-4491-9833-4c80b780133d",
                "VehicleId" => "76c5ba08edbc449198334c80b780133d",
                "LastUpdate" => "2019-10-07T19:43:31.2930000Z"
            ],
            [
                "Id" => "9991.qa/dd55dca2-5463-48ec-a1d4-6e35a2141992",
                "VehicleId" => "dd55dca2546348eca1d46e35a2141992",
                "LastUpdate" => "2019-10-07T19:43:31.2930000Z"
            ]
        ];
        
        $response = json_encode([
            "Vehicles" => $vehicles
        ]);

        $apiMock = $this->mock(Client::class);
        $apiMock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                $response
            ));

        $elasticsearchMock = $this->mock(VehicleElasticsearch::class);
        $elasticsearchMock->shouldReceive('index');
        $elasticsearchMock->shouldReceive('find');
        $elasticsearchMock->shouldReceive('createIndices');

        $importJob = new ImportVehicles();
        $importJob->handle();
    }
}
