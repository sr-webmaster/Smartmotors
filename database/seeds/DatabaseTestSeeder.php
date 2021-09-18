<?php

namespace App\Seeds;

use FreshinUp\ActivityApi\Seeds\FakeActivitySeeder;
use FreshinUp\FreshDealsApi\Seeds\FreshDealsDealSeed;
use FreshinUp\FreshDealsApi\Seeds\FreshDealsSavedReportTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseTestSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            FreshDealsDealSeed::class,
            FreshDealsSavedReportTableSeeder::class,
            FakeActivitySeeder::class
        ]);
    }
}
