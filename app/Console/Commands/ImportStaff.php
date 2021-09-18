<?php

namespace App\Console\Commands;

use App\Jobs\ImportStaff as ImportStaffJob;
use Illuminate\Console\Command;

class ImportStaff extends Command
{
    protected $name = 'pbs:import-staff';
    protected $description = 'Import staff members from PBS system';

    public function handle()
    {
        ImportStaffJob::dispatch();
    }
}
