<?php

namespace App\Jobs;

use App\Enums\UserType as UserTypeEnum;
use App\User;
use Carbon\Carbon;
use FreshinUp\FreshBusForms\Models\Address\Country;
use FreshinUp\FreshBusForms\Models\User\UserType;
use GuzzleHttp\Client as HttpClient;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Elasticsearch\Deal as DealElasticsearch;

class ImportDeals implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    const BASE_URL = 'http://partnerhub.pbsdealers.com';

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $container = app();
        $client = $container->make(HttpClient::class);
        $elasticsearch = $container->make(DealElasticsearch::class);

        $elasticsearch->createIndices();
        
        // create post request to get deals from pbs
        $response = $client->post(self::BASE_URL . '/json/reply/DealGet', [
            'auth' => [
                Config::get('pbs.username'),
                Config::get('pbs.password')
            ],
            'form_params' => [
                'SerialNumber' => Config::get('pbs.serial_number'),
                "ModifiedSince" => date('Y-m-d', time() - 3*24*60*60),
                "ModifiedUntil" => date('Y-m-d')
            ]
        ]);

        $data = json_decode($response->getBody()->getContents());

        foreach ($data->Deals as $deal) {
            $storedDeal = null;
            
            try {
                $storedDeal = $elasticsearch->find($deal->DealId);
            } catch (\Exception $e) {
            }

            if (!$storedDeal || ($storedDeal && $this->checkLastUpdate($storedDeal['LastUpdate'], $deal->LastUpdate))) {
                $elasticsearch->index($deal->DealId, $deal);
            }
        };
    }

    protected function checkLastUpdate($storedDate, $lastPbsUpdate)
    {
        $carbonStoredDate = Carbon::parse($storedDate);
        $carbonLastPbsUpdate = Carbon::parse($lastPbsUpdate);

        return $carbonLastPbsUpdate->greaterThan($carbonStoredDate);
    }
}
