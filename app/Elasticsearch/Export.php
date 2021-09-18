<?php

namespace App\Elasticsearch;

use FreshinUp\FreshBusForms\Helpers\ExportHelper;

class Export
{
    protected function buildData($data, $headers)
    {
        $finalData = [];

        foreach ($data as $item) {
            $row = [];
            foreach ($headers as $key) {
                if (isset($item['_source'][$key])) {
                    $row[] = $item['_source'][$key];
                }
            }
            $finalData[] = $row;
        }

        return $finalData;
    }

    public function exportCSV($data, $headers)
    {
        $exportData = $this->buildData($data, $headers);
        return ExportHelper::exportCSV($exportData, $headers);
    }

    public function exportPDF($data, $headers)
    {
        $styles = "
            table { border-collapse: collapse; font-size: 12px; width: 100%; }
            th { color: white; background: #414b68; border: 1px solid white; padding: 4px; }
            td { border: 1px solid black; padding: 4px; }
        ";
        $exportData = $this->buildData($data, $headers);
        return ExportHelper::exportTablePDF($exportData, $headers, $styles);
    }
}
