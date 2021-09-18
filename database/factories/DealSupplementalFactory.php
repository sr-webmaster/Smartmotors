<?php

use App\Models\DealSupplemental;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/
/** @var $factory Factory */
$factory->define(DealSupplemental::class, function (Faker $faker) {
    return [
        'created_at' => $faker->dateTimeBetween('-30 days', '+30 days'),
        'updated_at' => $faker->dateTimeBetween('-30 days', '+30 days'),

        // Basic information
        'secured_trade' => $faker->boolean,
        'unfunded' => $faker->boolean,
        'scheduled' => $faker->boolean,
        'carry_over' => $faker->boolean,
        'notes' => implode(' ', $faker->words),

        // Protection products
        'exterior' => $faker->boolean,
        'interior' => $faker->boolean,
        'diamon_fusion' => $faker->boolean,
        'nosemask' => $faker->boolean,
        'date_rdr' => $faker->dateTimeBetween('-30 days', '+30 days'),
        'bonus_points' => $faker->randomNumber(),
        'total_points' => $faker->randomNumber(),

        // Financial information
        'holdback' => $faker->randomFloat(),
        'bonus_cash' => $faker->randomFloat(),
        'dealer_fee' => $faker->randomFloat(),
        'dealer_trade_fee' => $faker->randomFloat(),
        'misc_cost' => $faker->randomFloat(),
        'desk_payment' => $faker->randomFloat(),
        'fi_declined' => $faker->boolean,
        'reconciled' => $faker->boolean,

        // Sales compensation
        'commission' => $faker->randomFloat(2),
        'accessory' => $faker->randomFloat(),
        'comp_gross' => $faker->randomFloat(),
        'spin' => $faker->boolean,
        'spin_amount' => $faker->randomFloat(),
        'spiff' => $faker->boolean,
        'spiff_amount' => $faker->randomFloat(),
        'flat' => $faker->boolean,
        'total_compensation' => $faker->randomFloat(),
    ];
});
