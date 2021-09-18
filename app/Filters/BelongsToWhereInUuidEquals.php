<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Filters\Filter;

class BelongsToWhereInUuidEquals implements Filter
{
    public function __invoke(Builder $query, $value, string $property): Builder
    {
        $value = is_array($value) ? $value : [$value];
        return $query->whereHas($property, function (Builder $query) use ($value) {
            $query->whereIn('uuid', $value);
        });
    }
}
