<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\Modifier as ModifierResource;
use App\Models\Modifier;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;

/**
 * Class FinancialReportsModifiers
 * @package App\Http\Controllers\CSM
 */
class FinancialModifiers extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        return ModifierResource::collection(QueryBuilder::for(Modifier::class, $request)->get());
    }
}
