<?php

namespace Tests\Feature\Commands;

use App\Jobs\ImportCustomers;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;

class ImportCustomersTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testThatAJobIsPushedInTheQueue()
    {
        Queue::fake();

        Artisan::call('pbs:import-customers');

        Queue::assertPushed(ImportCustomers::class, 1);
    }
}
