<?php

namespace App\Seeds;

use Illuminate\Database\Seeder;
use App\Models\Modifier;
use App\Models\FinancialReport;

class FinancialReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modifiers = Modifier::all();

        $reports = factory(FinancialReport::class, 6)->create();

        for ($i = 0; $i < count($reports); $i++) {
            $reports[$i]->modifier_1_id = $modifiers[$i % count($modifiers)]->id;
            $reports[$i]->modifier_2_id = $modifiers[($i + 1) % count($modifiers)]->id;
            $reports[$i]->save();
        }

    }
}
