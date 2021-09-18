<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Http\Resources\DealLot as DealLotResource;
use App\Models\DealLot;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class Lots extends Controller
{
    public function index(Request $request)
    {
        $dealLots = QueryBuilder::for(DealLot::class, $request)->get();

        return DealLotResource::collection($dealLots);
    }
}
