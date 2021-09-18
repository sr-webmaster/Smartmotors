<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\DealSupplementalResource;
use App\Models\DealSupplemental;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;

class Supplementals extends Controller
{
    public function index(Request $request)
    {
        // TODO: get from elacticsearch ?
        $supplementals = QueryBuilder::for(DealSupplemental::class, $request)->get();
        return DealSupplementalResource::collection($supplementals);
    }


    /**
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // TODO: data validation
        $data = $request->all();
        $supplemental = DealSupplemental::create($data);
        // TODO: add to elacticsearch ?

        return (new DealSupplementalResource($supplemental))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }


    /**
     * @param  int  $id
     * @return DealSupplementalResource
     */
    public function show($id)
    {
        $supplemental = DealSupplemental::findOrFail($id);
        // TODO: get from elacticsearch ?
        return new DealSupplementalResource($supplemental);
    }


    /**
     * @param  int  $id
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id, Request $request)
    {
        $supplemental = DealSupplemental::findOrFail($id);
        // TODO: data validation
        $supplemental->update($request->all());
        // TODO: update elacticsearch collection ?
        return (new DealSupplementalResource($supplemental))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    /**
     * @param  int  $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        $supplemental = DealSupplemental::findOrFail($id);
        $supplemental->delete();
        // TODO: delete from elacticsearch ?
        return response()->noContent(Response::HTTP_NO_CONTENT);
    }
}
