<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\DealType;
use Faker\Generator as Faker;

$factory->define(DealType::class, function (Faker $faker) {
    return [
        'name' => $faker->word
    ];
});
