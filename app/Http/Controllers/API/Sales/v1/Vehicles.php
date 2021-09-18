<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Elasticsearch\Vehicle as VehicleElasticsearch;

class Vehicles extends Controller
{
    public function index(Request $request)
    {
        $container = app();
        $elasticsearch = $container->make(VehicleElasticsearch::class);

        $body = [];
        if ($request->filter['ids']) {
            foreach ($request->filter['ids'] as $id) {
                $body['query']['bool']['should'][] = ['term' => ['VehicleId' => $id]];
            }
        }

        $deals = $elasticsearch->search($body);

        return [
            'data' => $deals['hits']['hits']
        ];
    }


    public function show(Request $request, $id)
    {
        $container = app();
        $elasticsearch = $container->make(VehicleElasticsearch::class);
        
        $vehicle = $elasticsearch->find($id);

        return ['data' => $vehicle];
    }
}
