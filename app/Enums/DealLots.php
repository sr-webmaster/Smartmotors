<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class DealLots extends Enum
{
    const MAIN_USED = 1;
    const SPECIAL_FI = 2;
    const TOYOTA = 3;

    public static function toKeyedSelectArray()
    {
        return json_decode(json_encode(static::toSelectArray()));
    }

    public static function getDescription($value): string
    {
        return parent::getDescription($value);
    }
}
