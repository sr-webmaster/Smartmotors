<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\FinancialReport;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use App\Http\Resources\Reportable as ReportableResource;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class FinancialReports extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $collection = QueryBuilder::for(FinancialReport::class, $request)
            ->allowedFilters(['name'])
            ->defaultSort('-created_at');

        return ReportableResource::collection($collection->jsonPaginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return ReportableResource
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'filters' => 'json|required',
            'modifier_1_id' => 'nullable|integer|exists:modifiers,id',
            'modifier_2_id' => 'nullable|integer|exists:modifiers,id'
        ]);

        $inputs = $request->input();

        $report = FinancialReport::create($inputs);

        return new ReportableResource($report);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $report = FinancialReport::findOrFail($id);
        $report->delete();
        return response()->json(null, SymfonyResponse::HTTP_NO_CONTENT);
    }
}
