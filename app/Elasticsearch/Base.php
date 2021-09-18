<?php

namespace App\Elasticsearch;

use Elasticsearch\ClientBuilder;
use Illuminate\Support\Facades\Config;

class Base
{
    protected $elasticsearch;
    protected $index;

    public function __construct()
    {
        $this->elasticsearch = ClientBuilder::create()
            ->setHosts([Config::get('elasticsearch.host')])
            ->build();
    }

    public function createIndices()
    {
    }

    public function index($id, $body)
    {
        $this->elasticsearch->index([
            'index' => $this->index,
            'id' => $id,
            'body' => $body
        ]);
    }

    public function find($id)
    {
        $params = [
            'index' => $this->index,
            'id' => $id
        ];
        
        return $this->elasticsearch->getSource($params);
    }

    public function search($body)
    {
        $params = [
            'index' => $this->index,
            'body' => $body
        ];
        
        return $this->elasticsearch->search($params);
    }
}
