<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\DealLot;
use Faker\Generator as Faker;

$factory->define(DealLot::class, function (Faker $faker) {
    return [
        'name' => $faker->word
    ];
});
