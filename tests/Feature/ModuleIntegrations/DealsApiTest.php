<?php
/**
 * Checking that Deals API is installed and works with CSM Inventory
 */

namespace Tests\Feature\ModuleIntegrations;

use App\User;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use FreshinUp\FreshBusForms\Models\User\User as BUSUser;

class DealsApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testCheckForDealsEndpoint()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        $response = $this->json('GET', '/api/deals/v1/deals?providers=report');
        $this->assertNotExceptionResponse($response);
        $response->assertStatus(200);
    }

    public function testUserModelExtendsAndMorphsFreshBusUserModel()
    {
        /** @var User $user */
        $user = factory(User::class)->create();
        $this->assertEquals(BUSUser::class, $user->getMorphClass());
        $this->assertTrue(is_subclass_of($user, BUSUser::class));
    }
}
