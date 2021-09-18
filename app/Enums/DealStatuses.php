<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class DealStatuses extends Enum
{
    const DELIVERED = 1;
    const SOLD = 2;
    const QUOTE = 3;
    const PROSPECT = 4;
    const LEAD = 5;
    const CANCELLED = 6;

    public static function toKeyedSelectArray()
    {
        return json_decode(json_encode(static::toSelectArray()));
    }

    public static function getDescription($value): string
    {
        return parent::getDescription($value);
    }
}
