<?php

namespace App\Seeds;

use App\Models\Modifier;
use Illuminate\Database\Seeder;

class FinancialModifiersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Modifier::truncate();

        $modifiers = [
            [
                'name' => 'customer_uuid',
                'resource_name' => 'users?filter[type]=2',
                'label' => 'Customer Name',
                'placeholder' => 'Customer Name',
                'type' => 'autocomplete',
                'filter' => 'filter[customer_uuid]',
                'value_param' => 'uuid',
                'text_param' => 'name'
            ],
            [
                'name' => 'salesrep_uuid',
                'resource_name' => 'users?filter[type]=1',
                'label' => 'Sales Rep Name',
                'placeholder' => 'Sales Reps',
                'type' => 'autocomplete',
                'filter' => 'filter[salesrep_uuid]',
                'value_param' => 'uuid',
                'text_param' => 'name'
            ],
            [
                'name' => 'type_id',
                'resource_name' => 'deal-types',
                'label' => 'Deal Type',
                'placeholder' => 'Deal Type',
                'type' => 'select',
                'filter' => 'filter[type_id]',
                'value_param' => 'uuid',
                'text_param' => 'id'
            ],
            [
                'name' => 'status_id',
                'resource_name' => 'deal-statuses',
                'label' => 'Status',
                'placeholder' => 'Status',
                'type' => 'select',
                'filter' => 'filter[status_id]',
                'value_param' => 'uuid',
                'text_param' => 'id'
            ],
            [
                'name' => 'date_after',
                'resource_name' => 'date_after',
                'label' => 'Min date',
                'placeholder' => 'Min date',
                'type' => 'date'
            ],
            [
                'name' => 'date_before',
                'resource_name' => 'date_before',
                'label' => 'Max date',
                'placeholder' => 'Max date',
                'type' => 'date'
            ],
        ];

        foreach ($modifiers as $item) {
            $comparationArray = [
                'name' => $item['name']
            ];
            if (array_key_exists('filter', $item)) {
                $comparationArray['filter'] = $item['filter'];
            }
            $modifier = Modifier::firstOrCreate($comparationArray, $item);
            $modifier->update($item);
        }
    }
}
