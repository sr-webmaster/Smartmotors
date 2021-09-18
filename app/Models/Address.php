<?php

namespace App\Models;

class Address extends \FreshinUp\FreshBusForms\Models\Address\Address
{
    public function getMorphClass()
    {
        return 'FreshinUp\FreshBusForms\Models\Address\Address';
    }
}
