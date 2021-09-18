<?php

namespace App\Jobs;

use App\User;
use Carbon\Carbon;
use FreshinUp\FreshBusForms\Models\User\UserType;
use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

abstract class ImportUsers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $userType;
    protected $pbsEndpoint;
    protected $responseArray;
    protected $pbsId;

    const BASE_URL = 'http://partnerhub.pbsdealers.com';

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * @param $email
     * @param $contact
     * @return mixed
     */
    abstract protected function getEmail($email, $contact);

    /**
     * @param \App\User $user
     * @param $contact
     * @return mixed
     */
    abstract protected function setPbsAdditionalParameters(User $user, $contact);

    /**
     * @param \App\User $user
     * @param $contact
     * @return mixed
     */
    abstract protected function setAddress(User $user, $contact);

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $container = app();
        $client = $container->make(Client::class);


        // create post request to get customers from pbs
        $response = $client->post(self::BASE_URL . '/json/reply/' . $this->pbsEndpoint, [
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

        // decode response and fetch array
        $datas = json_decode($response->getBody()->getContents());
        $contacts = $datas->{$this->responseArray};
        $userType = UserType::where('display_id', $this->userType)->first();

        foreach ($contacts as $contact) {
            // check for user existence in database according to pbs id
            $user = User::where('pbs_id', $contact->{$this->pbsId})->first();
            if (!$user || ($user && $this->checkLastUpdate($user->pbs_updated_at, $contact->LastUpdate))) {
                try {
                    DB::beginTransaction();

                    // If user does not exist yet, create a new one
                    if (!$user) {
                        $user = new User();
                        $email = $contact->EmailAddress;
                    } else {
                        $email = $user->email;
                    }

                    // map values
                    $user->email = $this->getEmail($email, $contact);
                    $user->first_name = $contact->FirstName;
                    $user->last_name = $contact->LastName;

                    // set pbs last update
                    $lastUpdate = Carbon::parse($contact->LastUpdate);
                    $user->pbs_updated_at = (String) $lastUpdate->toDateTimeString();

                    // set random password
                    $password = Str::random();
                    $user->password = bcrypt($password);

                    // user type
                    $user->type = $userType->id;

                    $user = $this->setPbsAdditionalParameters($user, $contact);

                    // record a different email if the email is already taken with a different pbs id
                    $i = 1;
                    $recordHasFailed = true;
                    $email = $user->email;
                    $array = explode('@', $email);
                    do {
                        try {
                            $user->save();
                            $recordHasFailed = false;
                        } catch (\Exception $e) {
                            if ($e->getCode() == 23000) {
                                $newEmail = $array[0] . '+' . $i . '@' . $array[1];
                                $user->email = $newEmail;
                                ++$i;
                            } else {
                                throw $e;
                            }
                        }
                    } while ($recordHasFailed);

                    $this->setAddress($user, $contact);
                } catch (\Exception $e) {
                    DB::rollBack();
                    Log::error('Error importing pbs customer data for customer ' . $contact->EmailAddress
                        . ' with pbs id ' . $contact->ContactId . ' on line ' . $e->getLine()
                        . '. Message: ' . $e->getMessage());
                }
                DB::commit();
            }
        }
    }

    /**
     * Compare stored pbs updated at with pbs updated at from API
     *
     * @param $storedDate
     * @param $lastPbsUpdate
     * @return bool
     */
    protected function checkLastUpdate($storedDate, $lastPbsUpdate)
    {
        $carbonStoredDate = Carbon::parse($storedDate);
        $carbonLastPbsUpdate = Carbon::parse($lastPbsUpdate);

        return $carbonLastPbsUpdate->greaterThan($carbonStoredDate);
    }
}
