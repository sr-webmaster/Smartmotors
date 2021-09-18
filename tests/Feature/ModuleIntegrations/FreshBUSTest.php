<?php
/**
 * Checking that the BUS is installed and works with CSM Inventory
 */

namespace Tests\Feature\ModuleIntegrations;

use App\User;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use FreshinUp\FreshBusForms\Models\User\User as BUSUser;

class FreshBUSTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testCheckForUsersEndpoint()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        $this
            ->json('GET', '/api/users')
            ->assertStatus(200);
    }

    public function testUserModelExtendsAndMorphsFreshBusUserModel()
    {
        /** @var User $user */
        $user = factory(User::class)->create();
        $this->assertEquals(BUSUser::class, $user->getMorphClass());
        $this->assertTrue(is_subclass_of($user, BUSUser::class));
    }
}
