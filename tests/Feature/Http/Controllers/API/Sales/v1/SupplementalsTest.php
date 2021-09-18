<?php

namespace Tests\Feature\Http\Controllers\API\Sales\v1;

use App\Models\DealSupplemental;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\Assert;
use Illuminate\Http\Response;
use Laravel\Passport\Passport;
use Tests\TestCase;

class SupplementalsTest extends TestCase
{

    public function testDealSupplementalStoreAsGuest()
    {
        $payload = factory(DealSupplemental::class)->make()->toArray();
        $response = $this->json('POST', '/api/sales/v1/supplementals', $payload);
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }


    public function testDealSupplementalStore()
    {
        $initialCount = DealSupplemental::count();
        $payload = factory(DealSupplemental::class)->make()->toArray();
        
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $data = $this->json('POST', '/api/sales/v1/supplementals', $payload)
            ->assertStatus(Response::HTTP_CREATED)
            ->json('data');

        $exclusion = ['created_at' => '', 'updated_at' => '', 'date_rdr' => ''];
        Assert::assertArraySubset(array_diff_key($payload, $exclusion), array_diff_key($data, $exclusion));
        $this->assertEquals($initialCount + 1, DealSupplemental::count());
    }


    public function testDealSupplementalShowAsGuest()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        $response = $this->json('GET', '/api/sales/v1/supplementals/' . $supplemental->id);
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }


    public function testDealSupplementalShowOnNotExisting()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $this->json('GET', '/api/sales/v1/supplementals/abc123')
            ->assertStatus(Response::HTTP_NOT_FOUND);
    }


    public function testDealSupplementalShow()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $data = $this->json('GET', '/api/sales/v1/supplementals/' . $supplemental->id)
            ->assertStatus(Response::HTTP_OK)
            ->json('data');
        
        $this->assertEquals($supplemental->id, $data['id']);
    }


    public function testDealSupplementalUpdateAsGuest()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        $payload = factory(DealSupplemental::class)->make()->toArray();
        $response = $this->json('PUT', '/api/sales/v1/supplementals/' . $supplemental->id, $payload);
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }


    public function testDealSupplementalUpdateOnNotExisting()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        $this->json('PUT', '/api/sales/v1/supplementals/abc123')
            ->assertStatus(Response::HTTP_NOT_FOUND);
    }


    public function testDealSupplementalUpdate()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        $payload = factory(DealSupplemental::class)->make()->toArray();
        $initialCount = DealSupplemental::count();
        
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $data = $this->json('PUT', '/api/sales/v1/supplementals/' . $supplemental->id, $payload)
            ->assertStatus(Response::HTTP_ACCEPTED)
            ->json('data');
        
        $this->assertEquals($initialCount, DealSupplemental::count());
        $exclusion = ['created_at' => '', 'updated_at' => '', 'date_rdr' => ''];
        Assert::assertArraySubset(array_diff_key($payload, $exclusion), array_diff_key($data, $exclusion));
    }


    public function testDealSupplementalDeleteAsGuest()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        $response = $this->json('DELETE', '/api/sales/v1/supplementals/' . $supplemental->id);
        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }


    public function testDealSupplementalDeleteNonExisting()
    {
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $count = DealSupplemental::count();
        
        $response = $this->json('DELETE', '/api/sales/v1/supplementals/abc123');
        $response->assertStatus(404);
        
        $this->assertEquals($count, DealSupplemental::count());
    }


    public function testDealSupplementalDelete()
    {
        $supplemental = factory(DealSupplemental::class)->create();
        $initialCount = DealSupplemental::count();
        
        $user = factory(User::class)->create();
        Passport::actingAs($user);
        
        $response = $this->json('DELETE', '/api/sales/v1/supplementals/' . $supplemental->id);
        $response->assertStatus(Response::HTTP_NO_CONTENT);
        
        $this->assertEquals($initialCount - 1, DealSupplemental::count());
    }
}
