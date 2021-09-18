<?php

namespace Tests\Feature\Http\Controllers\API\User;

use App\Seeds\UserLevelSeed;
use App\Seeds\UserTypeSeed;
use App\User;
use Tests\TestCase;
use Laravel\Passport\Passport;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserControllerTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    
    public function testDefaultSortRecentFirst()
    {
        $this->seed(UserLevelSeed::class);
        $this->seed(UserTypeSeed::class);

        $user = factory(User::class)->create([
            'created_at' => new \DateTime('2019-11-01')
        ]);
        Passport::actingAs($user);

        for ($i = 1; $i <= 9; $i++) {
            $date = new \DateTime("2019-10-0$i");

            factory(User::class)->create([
                'created_at' => $date
            ]);
        }

        $response = $this->get('/api/users');

        $data = $response->assertStatus(200)->json();

        $last_date = '9999-99-99';
        foreach ($data['data'] as $user) {
            $this->assertLessThan($last_date, $user['joined_at']);
            $last_date = $user['joined_at'];
        }
    }

    public function testCustomUserSearch()
    {
        $this->seed(UserLevelSeed::class);
        $this->seed(UserTypeSeed::class);

        $user = factory(User::class)->create();
        Passport::actingAs($user);

        factory(User::class, 3)->create();

        factory(User::class)->create([
            'email' => 'email-to-find@email.com',
            'mobile_phone' => '01234567890123456789'
        ]);

        $response = $this->get('/api/users?term=email-to-find');

        $data = $response->assertStatus(200)->json('data');

        $this->assertEquals(1, count($data));

        $response = $this->get('/api/users?term=456789012345');

        $data = $response->assertStatus(200)->json('data');

        $this->assertEquals(1, count($data));
    }
}
