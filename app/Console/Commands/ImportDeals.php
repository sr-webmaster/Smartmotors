<?php

namespace App\Console\Commands;

use App\Jobs\ImportDeals as ImportDealsJob;
use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class ImportDeals extends Command
{
    protected $name = 'pbs:import-deals';
    protected $description = 'Import deals from PBS system';

    public function handle()
    {
        ImportDealsJob::dispatch();
    }
}
