<?php

namespace App\Console\Commands;

use App\Jobs\ImportCustomers as ImportCustomersJob;
use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class ImportCustomers extends Command
{
    protected $name = 'pbs:import-customers';
    protected $description = 'Import customers from PBS system';

    public function handle()
    {
        ImportCustomersJob::dispatch();
    }
}
