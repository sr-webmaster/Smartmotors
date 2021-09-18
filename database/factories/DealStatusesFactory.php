<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\DealStatus;
use Faker\Generator as Faker;

$factory->define(DealStatus::class, function (Faker $faker) {
    return [
        'name' => $faker->word
    ];
});
