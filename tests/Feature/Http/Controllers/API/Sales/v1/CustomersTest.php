<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\Enums\UserType as UserTypeEnum;
use Tests\TestCase;
use App\User;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\WithFaker;

class CustomersTest extends TestCase
{
    use WithFaker, RefreshDatabase, WithoutMiddleware;

    protected function getStub()
    {
        $data = factory(User::class)->make([
            'type' => '1',
            'status' => '1'
        ])->toArray();

        unset($data['name']);
        unset($data['email_verified_at']);
        unset($data['updated_at']);
        unset($data['created_at']);

        return $data;
    }

    public function testGetList()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        factory(UserType::class)->create([
            'id' => UserTypeEnum::EMPLOYEE
        ]);

        $userType = factory(UserType::class)->create([
            'id' => UserTypeEnum::CUSTOMER
        ]);

        factory(User::class, 5)->create([
            'type' => UserTypeEnum::EMPLOYEE
        ]);

        $number = 2;
        factory(User::class, $number)->create([
            'type' => UserTypeEnum::CUSTOMER,
            'first_name' => 'customer',
            'last_name' => 'search'
        ]);

        $response = $this->json('get', "/api/sales/v1/customers?term=customer+search");
        $this->assertSuccess($response);
        $data = $response
            ->assertStatus(200)
            ->assertJsonStructure([
                'data'
            ])
            ->json('data');

        $this->assertNotEmpty($data);
        $this->assertEquals($number, count($data));
        $this->assertArraySubset([
            'type_name' => $userType->name
        ], $data[0]);
    }

    public function testGetItem404()
    {
        $user = factory(User::class)->create();

        Passport::actingAs($user);

        factory(UserType::class)->create([
            'id' => UserTypeEnum::EMPLOYEE
        ]);

        factory(UserType::class)->create([
            'id' => UserTypeEnum::CUSTOMER
        ]);

        $number = 2;
        factory(User::class, $number)->create([
            'type' => UserTypeEnum::CUSTOMER,
            'first_name' => 'customer',
            'last_name' => 'search'
        ]);

        $response = $this->json('get', "/api/sales/v1/customers/234w5w536653443rtert32");
        $response->assertStatus(404);
    }
}
