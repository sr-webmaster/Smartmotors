<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Modifier extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'resource_name' => $this->resource_name,
            'label' => $this->label,
            'placeholder' => $this->placeholder
        ];

        return $data;
    }
}
