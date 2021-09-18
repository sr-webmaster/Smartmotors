<?php

namespace App\Seeds;

use Illuminate\Database\Seeder;
use App\Models\DealType;
use App\Enums\DealTypes as DealTypesEmums;

class DealTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = DealTypesEmums::toKeyedSelectArray();

        foreach ($types as $id => $name) {
            DealType::updateOrCreate(
                ['id' => $id],
                ['name' => $name]
            );
        }
    }
}
