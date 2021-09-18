<?php

namespace App\Elasticsearch;

use Elasticsearch\ClientBuilder;
use Illuminate\Support\Facades\Config;

class Vehicle extends Base
{
    protected $index = 'vehicle';
}
