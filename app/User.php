<?php

namespace App;

class User extends \FreshinUp\FreshDealsApi\Models\User
{
    public function getMorphClass()
    {
        return 'FreshinUp\FreshBusForms\Models\User\User';
    }
}
