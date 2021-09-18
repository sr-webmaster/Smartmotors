<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;

class Install extends Command
{
    protected $name = 'smartmotors:install';
    protected $description = 'Install Project';

    public function handle()
    {
        $this->call('fresh-bus:install', [
            '--dev' => $this->option('dev')
        ]);
        $this->call('smartmotors:seed');
        passthru('yarn install' . ($this->option('dev') ? '' : '--production'));
        passthru('yarn ' . ($this->option('dev') ? 'dev' : 'prod'));
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
            ['dev', null, InputOption::VALUE_NONE, 'Developing with FreshBus. Usually used when symlinking']
        ];
    }
}
