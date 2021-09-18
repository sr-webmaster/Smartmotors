<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Elasticsearch\Vehicle;

class VehicleElasticsearchServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Vehicle::class, function ($app) {
            return new Vehicle();
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
