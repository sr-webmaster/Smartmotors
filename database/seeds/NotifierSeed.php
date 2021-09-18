<?php

namespace App\Seeds;

use FreshinUp\FreshBusForms\Models\Notifier;
use Illuminate\Database\Seeder;

class NotifierSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        $notifiers = [
            [
                'key_id' => 'new-opportunity',
                'name' => 'New Opportunity',
                'description' => 'Trigger: New opportunity assigned to you ',
                'uses_internal' => 1,
                'uses_email' => 1,
                'default_internal' => 1,
                'default_email' => 1,
            ], [
                'key_id' => 'opportunity-status-updates',
                'name' => 'Opportunity status updates',
                'description' => 'Trigger: status updates on your opportunities',
                'uses_internal' => 1,
                'uses_email' => 1,
                'default_internal' => 1,
                'default_email' => 1,
            ], [
                'key_id' => 'new-activity',
                'name' => 'New Activity',
                'description' => 'Trigger: New activities assigned to you ',
                'uses_internal' => 1,
                'uses_email' => 1,
                'default_internal' => 1,
                'default_email' => 1,
            ], [
                'key_id' => 'activity-status-updates',
                'name' => 'Activity status updates',
                'description' => 'Trigger: status updates on your activities',
                'uses_internal' => 1,
                'uses_email' => 1,
                'default_internal' => 1,
                'default_email' => 1,
            ], [
                'key_id' => 'activity-reminders',
                'name' => 'Activity reminders',
                'description' => 'Trigger: Follow up reminders on next steps of activites',
                'uses_internal' => 1,
                'uses_email' => 1,
                'default_internal' => 1,
                'default_email' => 1,
            ],
        ];
        foreach ($notifiers as $i) {
            Notifier::firstOrCreate($i);
        }
    }
}
