<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('addresses', 'API\Addresses@index');
    Route::resource('users', 'API\Users')->only(['index', 'store', 'update']);
    Route::apiResource('financial-reports', 'API\FinancialReports');
    Route::get('financial-modifiers', 'API\FinancialModifiers@index');

    Route::prefix('sales/v1')->group(function () {
        Route::apiResource('sales', 'API\Sales\v1\Sales')->only(['index', 'show']);
        Route::apiResource('customers', 'API\Sales\v1\Customers')->only(['index', 'show']);
        Route::post('export', 'API\Sales\v1\Sales@export');
        Route::get('aggregations', 'API\Sales\v1\Sales@aggregations');
        Route::get('lots', 'API\Sales\v1\Lots@index');
        Route::get('statuses', 'API\Sales\v1\Statuses@index');
        Route::get('types', 'API\Sales\v1\Types@index');
        Route::apiResource('supplementals', 'API\Sales\v1\Supplementals');
        Route::apiResource('vehicles', 'API\Sales\v1\Vehicles')->only(['index', 'show']);
    });
});
