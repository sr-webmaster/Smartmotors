<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\Models\DealType;
use App\Enums\DealTypes as DealTypesEmums;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TypesTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetList()
    {
        foreach (DealTypesEmums::toKeyedSelectArray() as $id => $name) {
            factory(DealType::class)->create(['name' => $name]);
        }

        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $response = $this->json('get', "/api/sales/v1/types");
        $this->assertNotExceptionResponse($response);

        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(4, count($data));
        $this->assertEquals(1, $data[0]['value']);
    }
}
