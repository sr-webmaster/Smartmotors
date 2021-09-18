<?php

namespace App\Helpers;

use FreshinUp\FreshBusForms\Helpers\UserPermissions as BusUserPermissions;
use FreshinUp\FreshBusForms\Enums\UserType as UserTypeEnum;

class UserPermissions extends BusUserPermissions
{
    public function getProperties($filters)
    {
        if (!isset($filters['type']) || $filters['type'] == UserTypeEnum::CUSTOMER) {
            return [
                'status' => [
                    'label' => 'Status',
                    'rules' => ['required'],
                    'readonly' => false
                ],
                'first_name' => [
                    'label' => 'First Name',
                    'rules' => ['required'],
                    'readonly' => false
                ],
                'last_name' => [
                    'label' => 'Last Name',
                    'rules' => ['required'],
                    'readonly' => false
                ],
                'title' => [
                    'label' => 'Title',
                    'rules' => ['nullable', 'string'],
                    'readonly' => false
                ],
                'email' => [
                    'label' => 'Email',
                    'rules' => ['required', 'email'],
                    'readonly' => false
                ],
                'type' => [
                    'label' => 'User Type',
                    'rules' => ['required', 'integer'],
                    'readonly' => false
                ],
                'mobile_phone' => [
                    'label' => 'Phone',
                    'rules' => [],
                    'readonly' => false
                ],
                'street' => [
                    'label' => 'Street address',
                    'rules' => [],
                    'readonly' => false
                ],
                'street_2' => [
                    'label' => 'State',
                    'rules' => [],
                    'readonly' => false
                ],
                'city' => [
                    'label' => 'City',
                    'rules' => [],
                    'readonly' => false
                ],
                'post_code' => [
                    'label' => 'Zip Code',
                    'rules' => [],
                    'readonly' => false
                ],
                'notes' => [
                    'label' => 'Notes',
                    'rules' => [],
                    'readonly' => false
                ],
                'text_enabled' => [
                    'label' => 'Text',
                    'rules' => [],
                    'readonly' => false
                ]
            ];
        }

        return [
            'status' => [
                'label' => 'Status',
                'rules' => [],
                'readonly' => false
            ],
            'first_name' => [
                'label' => 'First Name',
                'rules' => ['required'],
                'readonly' => false
            ],
            'last_name' => [
                'label' => 'Last Name',
                'rules' => ['required'],
                'readonly' => false
            ],
            'title' => [
                'label' => 'Title',
                'rules' => [],
                'readonly' => false
            ],
            'email' => [
                'label' => 'Email',
                'rules' => ['required', 'email'],
                'readonly' => false
            ],
            'type' => [
                'label' => 'User Type',
                'rules' => ['required', 'integer'],
                'readonly' => false
            ],
            'office_phone' => [
                'label' => 'Office Phone',
                'rules' => [],
                'readonly' => false
            ],
            'mobile_phone' => [
                'label' => 'Company Cell',
                'rules' => [],
                'readonly' => false
            ],
            'notes' => [
                'label' => 'Notes',
                'rules' => [],
                'readonly' => false
            ]
        ];
    }
}
