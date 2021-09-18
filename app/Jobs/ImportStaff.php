<?php

namespace App\Jobs;

use App\Enums\UserType as UserTypeEnum;
use App\User;

class ImportStaff extends ImportUsers
{
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->userType = UserTypeEnum::EMPLOYEE;
        $this->pbsEndpoint = 'EmployeeGet';
        $this->responseArray = "Employees";
        $this->pbsId = "EmployeeId";
    }


    /**
     * @param $email
     * @param $contact
     * @return mixed|string
     */
    protected function getEmail($email, $contact)
    {
        return $email == "" ? ($contact->FirstName . '.' . $contact->LastName . '@smartmotors.com') : $email;
    }

    /**
     * @param User $user
     * @param $contact
     * @return User|mixed
     */
    protected function setPbsAdditionalParameters(User $user, $contact)
    {
        // set pbs additional parameters
        $user->pbs_id = $contact->EmployeeId;
        $user->mobile_phone = $contact->Phone;

        return $user;
    }

    /**
     * @param User $user
     * @param $contact
     * @return mixed|void
     */
    protected function setAddress(User $user, $contact)
    {
    }
}
