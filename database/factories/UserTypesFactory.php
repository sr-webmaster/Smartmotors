<?php

use Faker\Generator as Faker;
use FreshinUp\FreshBusForms\Models\User\UserType;
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
$factory->define(UserType::class, function (Faker $faker) {
    return [
        'display_id' => $faker->randomNumber(),
        'name' => $faker->word,
    ];
});
