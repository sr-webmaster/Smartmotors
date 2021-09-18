<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\Models\DealStatus;
use App\Enums\DealStatuses as DealStatusesEmums;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StatusesTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetList()
    {
        foreach (DealStatusesEmums::toKeyedSelectArray() as $id => $name) {
            factory(DealStatus::class)->create(['name' => $name]);
        }

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/statuses");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(6, count($data));
    }
}
