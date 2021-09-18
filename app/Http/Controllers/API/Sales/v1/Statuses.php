<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Http\Resources\DealStatus as DealStatusResource;
use App\Models\DealStatus;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

class Statuses extends Controller
{
    public function index(Request $request)
    {
        $dealStatuses = QueryBuilder::for(DealStatus::class, $request)->get();

        return DealStatusResource::collection($dealStatuses);
    }
}
