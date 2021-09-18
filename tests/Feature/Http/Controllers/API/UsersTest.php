<?php

namespace Tests\Feature\Http\Controllers\API;

use Tests\TestCase;
use App\User;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\WithFaker;

class UsersTest extends TestCase
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
        $userType = factory(UserType::class)->create([
            'id' => 1,
            'display_id' => 1,
            'name' => 'Test Type'
        ]);
        $user = factory(User::class)->create([
            'type' => 1
        ]);
        Passport::actingAs($user);

        $data = $this
            ->json(
                'GET',
                'api/users'
            )
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [],
            ])
            ->json('data');

        $this->assertArraySubset([
            'id' => $user->id,
            'uuid' => $user->uuid,
            'first_name' => $user->first_name,
            'type_name' => $userType->name
        ], $data[0]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testCreateUserWithCompanyName()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $data = $this->getStub();

        $postData = array_merge($data, [
            'password' => 'password',
            'company_name' => 'CompanyNameTest'
        ]);

        $response = $this->json('post', 'api/users', $postData);
        $this->assertNotExceptionResponse($response);
        $responseData = $response
            ->assertStatus(201)
            ->json('data');

        $this->assertArraySubset($data, $responseData);
        $this->assertDatabaseHas('users', $data);
        $this->assertDatabaseHas('companies', ['name' => 'CompanyNameTest']);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUpdateUserWithCompanyName()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);

        $user2 = factory(User::class)->create();

        $data = $this->getStub();

        $postData = array_merge($data, ['company_name' => 'CompanyNameTest']);

        $responseData = $this
            ->json('put', "api/users/{$user2->id}", $postData)
            ->assertStatus(200)
            ->json('data');

        $this->assertArraySubset($data, $responseData);
        $this->assertDatabaseHas('users', $data);
        $this->assertDatabaseHas('companies', ['name' => 'CompanyNameTest']);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSearchAndFilterUser()
    {
        $user = factory(User::class)->create([
            'email' => 'test@test',
            'type' => 1
        ]);
        Passport::actingAs($user);

        $data = $this
            ->json(
                'GET',
                'api/users?term=test'
            )
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [],
            ])
            ->json('data');

        $this->assertArraySubset([
            'email' => 'test@test'
        ], $data[0]);

        $data = $this
            ->json(
                'GET',
                'api/users?term=test&filter[type]=2'
            )
            ->assertStatus(200)
            ->assertJsonStructure([
                'data' => [],
            ])
            ->json('data');

        $this->assertTrue(empty($data));
    }
}
