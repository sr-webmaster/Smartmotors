<?php

namespace App\Seeds;

use FreshinUp\FreshBusForms\Enums\UserType as UserTypeEnum;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Database\Seeder;

class UserTypeSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        UserType::truncate();
        
        $userTypes = UserTypeEnum::toKeyedArray();
        
        $ids = [];

        foreach ($userTypes as $userType) {
            $ids[] = $userType['value'];

            UserType::updateOrCreate([
                'display_id' => $userType['value']
            ], [
                'name' => $userType['label']
            ]);
        }

        UserType::whereNotIn('display_id', $ids)->delete();
    }
}
