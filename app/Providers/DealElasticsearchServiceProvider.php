<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Elasticsearch\Deal;

class DealElasticsearchServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Deal::class, function ($app) {
            return new Deal();
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
