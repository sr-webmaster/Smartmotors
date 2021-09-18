<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class Update extends Command
{
    protected $name = 'smartmotors:update';
    protected $description = 'Updating smartmotors and FreshPlatform Modules';

    public function handle()
    {

        $this->call('fresh-bus:update', [
            '--force-database' => $this->option('force-database'),
            '--force-ui' => $this->option('force-ui'),
            '--dev' => $this->option('dev'),
            '--skip-ui' => $this->option('skip-ui'),
            '--skip-database' => $this->option('skip-database'),
            '--skip-assets' => $this->option('skip-assets'),
        ]);

        // Need to add the other modules or let them autoregister some how
    }

    /*
     **
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['skip-database', null, InputOption::VALUE_NONE, 'Skip the database update'],
            ['skip-assets', null, InputOption::VALUE_NONE, 'Skip the assets update'],
            ['skip-ui', null, InputOption::VALUE_NONE, 'Skip the UI update'],
            ['dev', null, InputOption::VALUE_NONE, 'Developing with FreshBus. Usually used when symlinking'],
            [
                'force-database',
                null,
                InputOption::VALUE_NONE,
                'Force Database alterations. Helpful for production environments'
            ],
            [
                'force-ui',
                null,
                InputOption::VALUE_NONE,
                'Force UI alterations.'
            ]
        ];
    }
}
