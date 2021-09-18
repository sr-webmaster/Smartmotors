<?php

namespace App\Console;

use App\Console\Commands\ImportCustomers;
use App\Console\Commands\ImportDeals;
use App\Console\Commands\ImportVehicles;
use App\Console\Commands\ImportStaff;
use Illuminate\Console\Scheduling\Schedule;
use FreshinUp\FreshDealsApi\Commands\ImportProspects;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        ImportCustomers::class,
        ImportDeals::class,
        ImportVehicles::class,
        ImportStaff::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command(ImportCustomers::class)->dailyAt('00:00')->withoutOverlapping();
        $schedule->command(ImportDeals::class)->dailyAt('00:00')->withoutOverlapping();
        $schedule->command(ImportVehicles::class)->dailyAt('00:00')->withoutOverlapping();
        $schedule->command(ImportStaff::class)->dailyAt('00:00')->withoutOverlapping();
        $schedule->command(ImportProspects::class)->dailyAt('00:00')->withoutOverlapping();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
