<?php

namespace Tests\Feature\Models;

use App\Models\FinancialReport;
use App\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FinancialReportTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    public function testBelongsToUser()
    {
        $user = factory(User::class)->create();
        $financial_report = factory(FinancialReport::class)->create([
            'user_id' => $user->id
        ]);
        
        $this->assertEquals($financial_report->user->id, $user->id);
    }
}
