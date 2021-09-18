<?php

namespace Tests\Feature\Jobs;

use App\Enums\UserType as UserTypeEnum;
use App\Jobs\ImportCustomers;
use App\User;
use FreshinUp\FreshBusForms\Models\Company\Company;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Client;

class ImportCustomerTest extends TestCase
{
    use RefreshDatabase, WithFaker, WithoutMiddleware;

    public function testImportUsers()
    {
        $mock = $this->mock(Client::class);
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                $this->getMockResponse()
            ));

        $userType = $this->getCustomerUserType();

        $users = User::all();
        $this->assertCount(0, $users);

        $importJob = new ImportCustomers();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
            'email' => 'example0@pbssystems.com',
            'first_name' => 'Jason',
            'last_name' => 'Lemal',
            'mobile_phone' => '(403) 253-6304',
            'notes' => '',
            'text_enabled' => '1',
            'pbs_updated_at' => '2019-10-07 19:43:31',
            'type' => (String) $userType->id
        ], $user->toArray());
        $this->assertArraySubset([
            'street' => '3131 - 114 Ave. SE ',
            'post_code' => 'T2Z 3X2',
            'city' => 'Calgary',
            'country_id' => null
        ], $user->getPrimaryAddress()->toArray());
    }

    public function testItDoesNotUpdateTheUserIfLastUpdateFromPbsIsLowerOrEqualToTheOneStoreInTheDb()
    {
        $mock = $this->mock(Client::class);
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                $this->getMockResponse()
            ));

        $this->getCustomerUserType();

        $updatedAtDateTime = factory(User::class)->create([
            'pbs_id' => md5('0'),
            'pbs_updated_at' => '2019-10-07 19:43:37'
        ])->updated_at->toDateTimeString();

        $importJob = new ImportCustomers();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
            'updated_at' => $updatedAtDateTime
        ], $user->toArray());
    }

    public function testItUpdatesTheUserIfLastUpdateFromPbsIsGreatherToTheOneStoreInTheDb()
    {
        $mock = $this->mock(Client::class);
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                $this->getMockResponse()
            ));

        $this->getCustomerUserType();

        $updatedAtDateTime = factory(User::class)->create([
            'pbs_id' => md5('0'),
            'pbs_updated_at' => '2019-10-05 19:43:31'
        ])->updated_at->toDateTimeString();

        sleep(1);

        $importJob = new ImportCustomers();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first()->toArray();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
        ], $user);

        $this->assertNotEquals($updatedAtDateTime, $user['updated_at']);
    }

    public function testItSetNullOnCountryIfCountryIsNotInTheConstArray()
    {
        $mock = $this->mock(Client::class);
        $mockResponse = json_decode($this->getMockResponse());
        $mockResponse->Contacts[0]->County = "Dane";
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                json_encode($mockResponse)
            ));

        $this->getCustomerUserType();

        $updatedAtDateTime = factory(User::class)->create([
            'pbs_id' => md5('0'),
            'pbs_updated_at' => '2019-10-05 19:43:31'
        ])->updated_at->toDateTimeString();

        sleep(1);

        $importJob = new ImportCustomers();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first()->toArray();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
        ], $user);

        $this->assertNotEquals($updatedAtDateTime, $user['updated_at']);
        $address = $users->first()->getPrimaryAddress();
        $this->assertNull($address->country_id);
    }

    public function testItCreateNewCustomerIfEmailIsDuplicated()
    {
        $mock = $this->mock(Client::class);
        $mockResponse = json_decode($this->getMockResponse());
        $mockResponse->Contacts[1]->EmailAddress = "example0@pbssystems.com";
        $mockResponse->Contacts[2]->EmailAddress = "example0@pbssystems.com";
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                json_encode($mockResponse)
            ));

        $this->getCustomerUserType();

        sleep(1);

        $importJob = new ImportCustomers();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $this->assertDatabaseHas('users', [
            'email' => "example0+1@pbssystems.com",
            'pbs_id' => md5('1')
        ]);
        $this->assertDatabaseHas('users', [
            'email' => "example0+2@pbssystems.com",
            'pbs_id' => md5('2')
        ]);
    }

    protected function getCustomerUserType()
    {
        $userType = new UserType();
        $userType->name = UserTypeEnum::getKey(UserTypeEnum::CUSTOMER);
        $userType->display_id = UserTypeEnum::CUSTOMER;
        $userType->save();
        return $userType;
    }

    public function getMockResponse()
    {
        $resposeArray = [];

        for ($i = 0; $i < 31; $i++) {
            $resposeArray[] = [
                "Id" => "9991.qa/00126ead-e850-4cf9-99a2-d548a1e229c4",
                "ContactId" => md5("$i"),
                "SerialNumber" => "9991.qa",
                "Code" => "22520",
                "LastName" => "Lemal",
                "FirstName" => "Jason",
                "Salutation" => "",
                "MiddleName" => "Kyle",
                "ContactName" => "",
                "ApartmentNumber" => " ",
                "Address" => "3131 - 114 Ave. SE ",
                "City" => "Calgary",
                "County" => "Canada",
                "State" => "AB",
                "ZipCode" => "T2Z 3X2",
                "BusinessPhone" => "",
                "HomePhone" => "",
                "CellPhone" => "(403) 253-6304",
                "BusinessPhoneRawReverse" => "",
                "HomePhoneRawReverse" => "",
                "CellPhoneRawReverse" => "4036352304",
                "FaxNumber" => "",
                "EmailAddress" => "example{$i}@pbssystems.com",
                "Notes" => "",
                "CriticalMemo" => "",
                "Gender" => "Male",
                "DriverLicense" => "",
                "LastUpdate" => "2019-10-07T19:43:31.2930000Z",
                "FleetType" => "",
                "SalesRepRef" => "686b78d25def4f2ca412123d95604944",
                "Language" => "",
                "PayableAccount" => "",
                "ReceivableAccount" => "",
                "PrimaryImageRef" => "00000000000000000000000000000000",
                "CommunicationPreferences" => [
                    "Email" => "ImpliedConsent",
                    "Phone" => "ImpliedConsent",
                    "TextMessage" => "ImpliedConsent",
                    "Letter" => "ImpliedConsent",
                    "Preferred" => "Phone"
                ]
            ];
        }

        return json_encode([
            "Contacts" => $resposeArray
        ]);
    }
}
