<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Http\Resources\DealType as DealTypeResource;
use App\Models\DealType;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class Types extends Controller
{
    public function index(Request $request)
    {
        $dealTypes = QueryBuilder::for(DealType::class, $request)->get();

        return DealTypeResource::collection($dealTypes);
    }
}
