<?php

namespace Tests\Feature\Jobs;

use App\Enums\UserType as UserTypeEnum;
use App\Jobs\ImportStaff;
use App\User;
use FreshinUp\FreshBusForms\Models\Company\Company;
use FreshinUp\FreshBusForms\Models\User\UserType;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Client;

class ImportStaffTest extends TestCase
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

        $importJob = new ImportStaff();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
            'email' => 'example0@smartmotors.com',
            'first_name' => 'Jason0',
            'last_name' => 'Lemal0',
            'mobile_phone' => '(403) 253-6304',
            'pbs_updated_at' => '2019-10-07 19:43:31',
            'type' => (String) $userType->id
        ], $user->toArray());
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

        $importJob = new ImportStaff();
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

        $importJob = new ImportStaff();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $user = $users->first()->toArray();
        $this->assertArraySubset([
            'pbs_id' => md5('0'),
        ], $user);

        $this->assertNotEquals($updatedAtDateTime, $user['updated_at']);
    }

    public function testItCreateNewCustomerIfEmailIsDuplicated()
    {
        $mock = $this->mock(Client::class);
        $mockResponse = json_decode($this->getMockResponse());
        $mockResponse->Employees[1]->EmailAddress = "example0@smartmotors.com";
        $mockResponse->Employees[2]->EmailAddress = "example0@smartmotors.com";
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                json_encode($mockResponse)
            ));

        $this->getCustomerUserType();

        sleep(1);

        $importJob = new ImportStaff();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $this->assertDatabaseHas('users', [
            'email' => "example0+1@smartmotors.com",
            'pbs_id' => md5('1')
        ]);
        $this->assertDatabaseHas('users', [
            'email' => "example0+2@smartmotors.com",
            'pbs_id' => md5('2')
        ]);
    }

    public function testItCreateNewCustomerWithEmailMadeByFirstNameAndLastNameIfTheEmailAddressFieldIsEmpty()
    {
        $mock = $this->mock(Client::class);
        $mockResponse = json_decode($this->getMockResponse());
        $mockResponse->Employees[0]->EmailAddress = "";
        $mock->shouldReceive('post')
            ->andReturn(new Response(
                $status = 200,
                $headers = [],
                json_encode($mockResponse)
            ));

        $this->getCustomerUserType();

        sleep(1);

        $importJob = new ImportStaff();
        $importJob->handle();

        $users = User::all();
        $this->assertCount(31, $users);

        $this->assertDatabaseHas('users', [
            'email' => "Jason0.Lemal0@smartmotors.com",
            'pbs_id' => md5('0')
        ]);
    }

    protected function getCustomerUserType()
    {
        $userType = new UserType();
        $userType->name = UserTypeEnum::getKey(UserTypeEnum::EMPLOYEE);
        $userType->display_id = UserTypeEnum::EMPLOYEE;
        $userType->save();
        return $userType;
    }

    public function getMockResponse()
    {
        $resposeArray = [];

        for ($i = 0; $i < 31; $i++) {
            $resposeArray[] = [
                "Id" => "9991.qa/00126ead-e850-4cf9-99a2-d548a1e229c4",
                "EmployeeId" => md5("$i"),
                "SerialNumber" => "9991.qa",
                "LastName" => "Lemal" . $i,
                "FirstName" => "Jason" . $i,
                "Phone" => "(403) 253-6304",
                "EmailAddress" => "example{$i}@smartmotors.com",
                "LastUpdate" => "2019-10-07T19:43:31.2930000Z",
                "UserName" => "686",
                "Password" => "",
                "Sales" => false,
                "SalesmanNumber" => "",
                "SalesRole" => "",
                "FixedOps" => true,
                "FixedOpsEmployeeNumber" => "686",
                "FixedOpsRole" => "None",
                "Technician" => true,
                "TechnicianNumber" => "686",
                "ManufacturerID" => "104-717298202",
                "DefaultShop" => "",
                "PhoneExtension" => "",
                "CallTrakPin" => "",
                "IsInactive" => false,
                "IsConnectEnabled" => false,
                "IsDocSigningEnabled" => false,
                "IsMobileServiceArrival" => false
            ];
        }

        return json_encode([
            "Employees" => $resposeArray
        ]);
    }
}
