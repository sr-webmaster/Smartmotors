<?php

namespace Tests\Feature\Http\Resources;

use App\Models\FinancialReport;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Http\Resources\User as UserResource;

class UserTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    public function testHasCustomerIdProp()
    {
        $user = factory(User::class)->create([
            'pbs_id' => 1
        ]);

        $userRes = new UserResource($user);
        
        $this->assertEquals($userRes->pbs_id, 1);
    }

    public function testHasTextProp()
    {
        $user = factory(User::class)->create([
            'text_enabled' => true
        ]);

        $userRes = new UserResource($user);
        
        $this->assertEquals($userRes->text_enabled, true);
    }
}
