<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;
use FreshinUp\FreshBusForms\Http\Resources\Address\Address as AddressResource;

class Addresses extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $locations = QueryBuilder::for(Address::class, $request)
            ->allowedFilters([
                'city'
            ]);

        return AddressResource::collection($locations->jsonPaginate());
    }
}
