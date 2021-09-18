<?php

namespace App\Http\Resources;

use FreshinUp\FreshBusForms\Http\Resources\User\UserCollection as BusUserCollection;

class UserCollection extends BusUserCollection
{
    public $collects = 'App\Http\Resources\User';
}
