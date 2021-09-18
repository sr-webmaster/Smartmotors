<?php

use App\Models\Address;
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
$factory->define(Address::class, function (Faker $faker) {
    return [
        'street' => $faker->streetAddress,
        'street_2' => $faker->streetAddress,
        'city' => $faker->city,
        'post_code' => $faker->postcode,
    ];
});
