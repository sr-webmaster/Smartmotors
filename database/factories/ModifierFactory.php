<?php

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
$factory->define(\App\Models\Modifier::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'resource_name' => $faker->word,
        'label' => $faker->word,
        'placeholder' => $faker->word,
        'type' => $faker->randomElement(['autocomplete', 'select', 'date', 'text']),
        'filter' => $faker->randomElement([null, $faker->word]),
        'value_param' => $faker->randomElement([null, $faker->word]),
        'text_param' => $faker->randomElement([null, $faker->word])
    ];
});
