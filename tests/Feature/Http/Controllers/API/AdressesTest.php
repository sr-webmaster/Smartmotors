<?php

namespace Tests\Feature\Http\Controllers\API;

use App\Models\Address;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Passport\Passport;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AddressesTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetList()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        $addresses = factory(Address::class, 5)->create();

        $data = $this
            ->json('get', "/api/addresses")
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(5, count($data));
        foreach ($addresses as $idx => $address) {
            $this->assertArraySubset([
                'id' => $address->id,
                'city' => $address->city
            ], $data[$idx]);
        }
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetListWithFilters()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        factory(Address::class, 5)->create([
            'city' => 'Not visibles'
        ]);

        $addressesToFind = factory(Address::class, 5)->create([
            'city' => 'To find'
        ]);

        $data = $this
            ->json('get', "/api/addresses")
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(10, count($data));


        $data = $this
            ->json('get', "/api/addresses?filter[city]=find")
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals(5, count($data));

        foreach ($addressesToFind as $idx => $address) {
            $this->assertArraySubset([
                'id' => $address->id,
                'city' => $address->city
            ], $data[$idx]);
        }
    }
}
