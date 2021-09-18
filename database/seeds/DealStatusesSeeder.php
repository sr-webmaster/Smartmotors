<?php

namespace App\Seeds;

use Illuminate\Database\Seeder;
use App\Models\DealStatus;
use App\Enums\DealStatuses as DealStatusesEmums;

class DealStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = DealStatusesEmums::toKeyedSelectArray();

        foreach ($types as $id => $name) {
            DealStatus::updateOrCreate(
                ['id' => $id],
                ['name' => $name]
            );
        }
    }
}
