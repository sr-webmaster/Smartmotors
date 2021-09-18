<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\Elasticsearch\Deal as DealElasticsearch;
use App\Elasticsearch\Export as ExportElasticsearch;
use App\Enums\DealTypes as DealTypesEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Sales extends Controller
{
    protected function getSortQuery($sort)
    {
        $sortBy = $sort;
        $sortOrder = $sortBy[0] === '-' ? 'desc' : 'asc';
        if ($sortOrder === 'desc') {
            $sortBy = substr($sortBy, 1);
        }
        return [$sortBy => ["order" => $sortOrder]];
    }

    private function buildFilters(Request $request)
    {
        $body = [];

        if (isset($request->filter['customer_uuid'])) {
            $body['query']['bool']['must'][] = ['term' => ['BuyerRef' => $request->filter['customer_uuid']]];
        }

        if (isset($request->filter['salesrep_uuid'])) {
            $body['query']['bool']['must'][]['term'] =
                ['UserRoles.EmployeeRef' => $request->filter['salesrep_uuid']];
        }

        if (isset($request->filter['status'])) {
            $index = isset($body['query']['bool']['must']) ? count($body['query']['bool']['must']) : 0;

            foreach ($request->filter['status'] as $value) {
                $body['query']['bool']['must'][$index]['bool']['should'][] = ['match' => ['SystemStatus' => $value]];
            }
        }

        if (isset($request->filter['type'])) {
            $index = isset($body['query']['bool']['must']) ? count($body['query']['bool']['must']) : 0;

            switch ($request->filter['type']) {
                case DealTypesEnum::NEW:
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'term' => ['Vehicles.IsNewVehicle' => true]
                    ];
                    break;
                case DealTypesEnum::USED:
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'term' => ['Vehicles.IsNewVehicle' => false]
                    ];
                    break;
                case DealTypesEnum::NEW_TRADE_IN:
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'term' => ['Vehicles.IsNewVehicle' => true]
                    ];
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'exists' => ['field' => 'Trades']
                    ];
                    break;
                case DealTypesEnum::USED_TRADE_IN:
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'term' => ['Vehicles.IsNewVehicle' => false]
                    ];
                    $body['query']['bool']['must'][$index]['bool']['must'][] = [
                        'exists' => ['field' => 'Trades']
                    ];
                    break;
            }
        }

        if (isset($request->filter['date_after']) && isset($request->filter['date_before'])) {
            $body['query']['bool']['must'][]['range']['ContractDate'] = [
                'gte' => $request->filter['date_after'],
                'lte' => $request->filter['date_before']
            ];
        }

        return $body;
    }

    public function index(Request $request)
    {
        $container = app();
        $elasticsearch = $container->make(DealElasticsearch::class);

        $body = $this->buildFilters($request);

        if ($request->sort) {
            $body['sort'] = $this->getSortQuery($request->sort);
        }

        $pageSize = (int) ($request->page['size'] ?? 10);
        $pageNumber = (int) ($request->page['number'] ?? 1);

        $body['from'] = ($pageNumber - 1) * $pageSize;
        $body['size'] = $pageSize;

        $deals = $elasticsearch->search($body);

        $totalItems = $deals['hits']['total']['value'];
        $lastPage = ceil($totalItems / $pageSize);

        return [
            'data' => $deals['hits']['hits'],
            'meta' => [
                'current_page' => $pageNumber,
                'last_page' => $lastPage,
                'per_page' => $pageSize,
                'total' => $totalItems
            ]
        ];
    }

    public function export(Request $request)
    {
        $container = app();
        $elasticsearch = $container->make(DealElasticsearch::class);

        $headers = $request->get('headers');

        $body = $this->buildFilters($request);

        $body['from'] = 0;
        $body['size'] = 10000;

        if ($request->sort) {
            $body['sort'] = $this->getSortQuery($request->sort);
        }

        $deals = $elasticsearch->search($body);

        $export = new ExportElasticsearch();

        if ($request->filetype == 'pdf') {
            $content = $export->exportPDF($deals['hits']['hits'], $headers);
            $filename = 'report' . time() . '.pdf';
        } else {
            $content = $export->exportCSV($deals['hits']['hits'], $headers);
            $filename = 'report' . time() . '.csv';
        }

        Storage::disk('tmp')->put($filename, $content);
        return Storage::disk('tmp')->temporaryUrl($filename, now()->addMinutes(5));
    }

    public function aggregations(Request $request)
    {
        $container = app();
        $elasticsearch = $container->make(DealElasticsearch::class);

        $body = $this->buildFilters($request);

        $body['aggs'] = [
            'DealGross' => ['sum' => ['field' => 'Gross.DealGross']],
            'FinanceGross' => ['sum' => ['field' => 'Gross.FinanceGross']],
            'AccessoryGross' => ['sum' => ['field' => 'Gross.AccessoryGross']],
            'FinanceCharges' => ['sum' => ['field' => 'FinanceInfo.FinanceCharges']],
            'Statuses' => ['terms' => ['field' => 'SystemStatus']],
        ];

        $deals = $elasticsearch->search($body);

        $deals['aggregations']['Statuses'] = $deals['aggregations']['Statuses']['buckets'];

        return ['data' => $deals['aggregations']];
    }

    public function show(Request $request, $id)
    {
        $container = app();
        $elasticsearch = $container->make(DealElasticsearch::class);

        $deal = $elasticsearch->find($id);

        return ['data' => $deal];
    }
}
