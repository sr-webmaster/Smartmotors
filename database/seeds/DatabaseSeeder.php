<?php

namespace App\Seeds;

use FreshinUp\FreshDealsApi\Seeds\FreshDealsDealStatusSeed;
use FreshinUp\FreshDealsApi\Seeds\FreshDealsDealTypeSeed;
use FreshinUp\FreshDealsApi\Seeds\FreshDealsModifierTableSeeder;
use FreshinUp\ActivityApi\Seeds\StatusSeeder as ActivityStatusSeeder;
use FreshinUp\ActivityApi\Seeds\TypeSeeder as ActivityTypeSeeder;
use FreshinUp\ActivityApi\Seeds\ReminderUnitSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $this->call([
            UserTypeSeed::class,
            UserLevelSeed::class,
            DealLotsSeeder::class,
            DealTypesSeeder::class,
            DealStatusesSeeder::class,
            UserTypeSeed::class,
            UserLevelSeed::class,
            NotifierSeed::class,
            FreshDealsDealStatusSeed::class,
            FreshDealsDealTypeSeed::class,
            FreshDealsModifierTableSeeder::class,
            ActivityStatusSeeder::class,
            ActivityTypeSeeder::class,
            ReminderUnitSeeder::class,
            FinancialModifiersSeeder::class,
        ]);
    }
}
