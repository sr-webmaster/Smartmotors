<?php

namespace Tests\Feature\Policies;

use App\User;
use App\Enums\UserLevel as UserLevelEnum;
use App\Enums\UserType as UserTypeEnum;
use FreshinUp\FreshBusForms\Models\User\UserType;
use FreshinUp\FreshBusForms\Models\User\UserLevel;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserPolicyTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    public function testSalesRepPermissions()
    {
        $level = factory(UserLevel::class)->create([
            'display_id' => UserLevelEnum::SALES_REP
        ]);

        $salesRep = factory(User::class)->create([
            'level' => $level->id
        ]);
        
        $anotherUser = factory(User::class)->create();
        
        // Sales rep can't create user
        $this->assertFalse($salesRep->can('create', User::class));
        // Sales rep can edit user
        $this->assertTrue($salesRep->can('view', $anotherUser));
        // Sales rep can't edit user
        $this->assertFalse($salesRep->can('update', $anotherUser));
        // Sales rep can edit himself
        $this->assertTrue($salesRep->can('update', $salesRep));
        // Sales rep can't delete user
        $this->assertFalse($salesRep->can('delete', $anotherUser));
    }

    public function testManagerPermissions()
    {
        $level = factory(UserLevel::class)->create([
            'display_id' => UserLevelEnum::MANAGER
        ]);

        $manager = factory(User::class)->create([
            'level' => $level->id
        ]);

        $employeeType = factory(UserType::class)->create([
            'display_id' => UserTypeEnum::EMPLOYEE
        ]);
        $customerType = factory(UserType::class)->create([
            'display_id' => UserTypeEnum::CUSTOMER
        ]);
        
        $employee = factory(User::class)->create([
            'type' => $employeeType->id
        ]);
        $customer = factory(User::class)->create([
            'type' => $customerType->id
        ]);
        
        // Manager can create user
        $this->assertTrue($manager->can('create', User::class));
        // Manager can edit customer
        $this->assertTrue($manager->can('update', $customer));
        // Manager can't edit employee
        $this->assertFalse($manager->can('update', $employee));
        // Manager can edit himself
        $this->assertTrue($manager->can('update', $manager));
        // Manager can delete customer
        $this->assertTrue($manager->can('delete', $customer));
        // Manager can't delete employee
        $this->assertFalse($manager->can('delete', $employee));
    }
}
