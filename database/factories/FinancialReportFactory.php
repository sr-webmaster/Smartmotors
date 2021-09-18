<?php

use Faker\Generator as Faker;
use App\Models\FinancialReport;
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
$factory->define(FinancialReport::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'filters' => json_encode([
            $faker->word => $faker->randomElement([$faker->word, $faker->randomNumber()]),
            $faker->word => $faker->randomElement([$faker->word, $faker->randomNumber()])
        ]),
        'created_at' => $faker->dateTimeBetween('-30 days', '+30 days'),
    ];
});
