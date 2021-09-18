<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class UserLevel extends Enum
{
    const SUPER_ADMIN = 1;
    const C_LEVEL = 2;
    const MANAGER = 3;
    const SALES_REP = 4;

    /**
     * Transform the key name into a friendly, formatted version
     *
     * @param string $key
     * @return string
     */
    protected static function getFriendlyKeyName(string $key): string
    {
        return ucwords(Enum::getFriendlyKeyName($key));
    }

    public static function toKeyedSelectArray()
    {
        return json_decode(json_encode(static::toSelectArray()));
    }

    public static function toKeyedArray()
    {
        $array = self::toArray();
        $selectArray = [];

        foreach ($array as $key => $value) {
            array_push($selectArray, [
                'value' => $value,
                'key' => $key,
                'label' => static::getDescription($value),
            ]);
        }

        return $selectArray;
    }
}
