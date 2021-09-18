<?php

namespace Tests\Feature\Http\Controllers\API\User;

use App\User;
use Tests\TestCase;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use FreshinUp\FreshBusForms\Enums\UserType as UserTypeEnum;

class UsersPermissionTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    
    public function testGetForCustomerUser()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $response = $this->get('/api/bus/v1/permissions/users?filter[type]=' . UserTypeEnum::CUSTOMER);

        $data = $response->assertStatus(200)->json();

        $this->assertArrayHasKey('text_enabled', $data['data']['properties']);
    }

    public function testGetForStaffUser()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $response = $this->get('/api/bus/v1/permissions/users?filter[type]=' . UserTypeEnum::STAFF);

        $data = $response->assertStatus(200)->json();

        $this->assertArrayNotHasKey('company_name', $data['data']['properties']);
    }
}
