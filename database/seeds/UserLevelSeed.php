<?php

namespace App\Seeds;

use FreshinUp\FreshBusForms\Models\User\UserLevel;
use App\Enums\UserLevel as UserLevelEnum;
use Illuminate\Database\Seeder;

class UserLevelSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $userLevels = UserLevelEnum::toKeyedArray();
        
        $ids = [];

        foreach ($userLevels as $userLevel) {
            $ids[] = $userLevel['value'];

            UserLevel::updateOrCreate([
                'display_id' => $userLevel['value'],
            ], [
                'name' => $userLevel['label'],
                'default' => $userLevel['label'],
                'forCompany' => 0,
                'forPlatform' => 1,
                'enabled' => 1
            ]);
        }

        UserLevel::whereNotIn('display_id', $ids)->update(['enabled' => 0]);
    }
}
