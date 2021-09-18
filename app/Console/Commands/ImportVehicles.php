<?php

namespace App\Console\Commands;

use App\Jobs\ImportVehicles as ImportVehiclesJob;
use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class ImportVehicles extends Command
{
    protected $name = 'pbs:import-vehicles';
    protected $description = 'Import Vehicles from PBS system';

    public function handle()
    {
        ImportVehiclesJob::dispatch();
    }
}
