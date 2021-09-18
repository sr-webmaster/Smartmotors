<?php

namespace App\Seeds;

use Illuminate\Database\Seeder;
use App\Models\DealLot;
use App\Enums\DealLots as DealLotsEmums;

class DealLotsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = DealLotsEmums::toKeyedSelectArray();

        foreach ($types as $id => $name) {
            DealLot::updateOrCreate(
                ['id' => $id],
                ['name' => $name]
            );
        }
    }
}
