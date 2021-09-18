<?php

namespace App\Elasticsearch;

use Elasticsearch\ClientBuilder;
use Illuminate\Support\Facades\Config;

class Deal extends Base
{
    protected $elasticsearch;
    protected $index = 'deal';

    public function createIndices()
    {
        if (!$this->elasticsearch->indices()->exists([ 'index' => 'deal' ])) {
            $response = $this->elasticsearch->indices()->create([ 'index' => 'deal' ]);
        }

        $params = [
            'index' => 'deal',
            'body' => [
                '_source' => [
                    'enabled' => true
                ],
                'properties' => [
                    'SystemStatus' => [
                        'type' => 'text',
                        'fielddata' => true
                    ]
                ]
            ]
        ];
        $this->elasticsearch->indices()->putMapping($params);
    }
}
