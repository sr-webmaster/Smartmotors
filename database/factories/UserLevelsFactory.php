<?php

use Faker\Generator as Faker;
use FreshinUp\FreshBusForms\Models\User\UserLevel;
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
$factory->define(UserLevel::class, function (Faker $faker, $attrib) {
    return [
        'display_id' => $attrib['display_id'],
        'enabled' => true,
        'default' => $faker->word,
        'name' => $faker->word,
        'forCompany' => $faker->boolean,
        'forPlatform' => $faker->boolean,
    ];
});
