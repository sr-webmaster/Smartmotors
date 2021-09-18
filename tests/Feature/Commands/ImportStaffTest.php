<?php

namespace Tests\Feature\Commands;

use App\Jobs\ImportStaff;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;

class ImportStaffTest extends TestCase
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

        Artisan::call('pbs:import-staff');

        Queue::assertPushed(ImportStaff::class, 1);
    }
}
