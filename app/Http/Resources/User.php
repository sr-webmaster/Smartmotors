<?php

namespace App\Http\Resources;

use FreshinUp\FreshBusForms\Http\Resources\User\User as UserResource;

class User extends UserResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        $data['type_name'] = optional($this->user_type)->name;
        $data['text_enabled'] = $this->text_enabled;
        $data['pbs_id'] = $this->pbs_id;

        return $data;
    }
}
