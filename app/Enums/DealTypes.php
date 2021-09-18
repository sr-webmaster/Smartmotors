<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class DealTypes extends Enum
{
    const NEW = 1;
    const USED = 2;
    const NEW_TRADE_IN = 3;
    const USED_TRADE_IN = 4;

    public static function toKeyedSelectArray()
    {
        return json_decode(json_encode(static::toSelectArray()));
    }

    public static function getDescription($value): string
    {
        return parent::getDescription($value);
    }
}
