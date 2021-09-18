<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\InputOption;

class Seed extends Command
{
    protected $name = 'smartmotors:seed';
    protected $description = 'smartmotors Seed the Database';

    public function handle()
    {
        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            $this->error('Could not connect to the database, please check your configuration:' . "\n" . $e);

            return;
        }

        if ($this->option('refresh')) {
            $this->call('migrate:refresh', [
                '--force' => $this->option('force')
            ]);
            $this->call('passport:install', [
                '--force' => $this->option('force')
            ]);
        }

        $this->call('fresh-bus:seed', [
            '--quickstart' =>  $this->option('quickstart')
        ]);

        $this->call('db:seed', [
            '--class' => 'App\\Seeds\\DatabaseSeeder',
            '--force' => $this->option('force')
        ]);

        if ($this->option('quickstart')) {
            $this->call('db:seed', [
                '--class' => 'App\\Seeds\\DatabaseTestSeeder',
                '--force' => $this->option('force')
            ]);
        }
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
            [
                'quickstart',
                null,
                InputOption::VALUE_NONE,
                'Load sample users, companies, teams, inventory, etc. Helpful for local dev and staging environments'
            ],
            [
                'refresh',
                null,
                InputOption::VALUE_NONE,
                'Wipe out existing data and reseed.'
            ],
            [
                'force',
                null,
                InputOption::VALUE_NONE,
                'Force the database change without requesting user interaction / acceptance'
            ]
        ];
    }
}
