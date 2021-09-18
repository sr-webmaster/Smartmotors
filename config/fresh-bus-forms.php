<?php

use FreshinUp\FreshBusForms\Http\Controllers\Auth\LoginController;
use FreshinUp\FreshBusForms\Http\Controllers\Auth\PasswordsController;
use FreshinUp\FreshBusForms\Http\Controllers\ConsumerController;
use FreshinUp\FreshBusForms\Http\Controllers\SPAController;
use FreshinUp\FreshBusForms\Enums\RegistrationType;
use FreshinUp\FreshBusForms\Enums\UserType as UserTypeEnum;

return [
    'app' => [
        'name' => config('APP_NAME', 'FreshinUp'),
        'registrationType' => RegistrationType::ADMIN_ONLY,
        'block_login' => [UserTypeEnum::CUSTOMER]
    ],
    'models' => [
        'user'          => FreshinUp\FreshBusForms\Models\User\User::class,
        'user_level'    => FreshinUp\FreshBusForms\Models\User\UserLevel::class,
        'user_type'     => FreshinUp\FreshBusForms\Models\User\UserType::class,
        'user_status'   => FreshinUp\FreshBusForms\Models\User\UserStatus::class,
        'policy'        => FreshinUp\FreshBusForms\Models\Policy::class,
        'policy_versions'   => FreshinUp\FreshBusForms\Models\PolicyVersion::class,
        'policy_agreements' => FreshinUp\FreshBusForms\Models\PolicyAgreement::class,
    ],
    'resources' => [
        'user'          => App\Http\Resources\User::class,
        'current_user'  => FreshinUp\FreshBusForms\Http\Resources\User\CurrentUser::class
    ],
    'controllers' => [
        'login'         => LoginController::class,
        'password'      => PasswordsController::class,
        'ConsumerSPA'   => ConsumerController::class,
        'AdminSPA'      => SPAController::class,
    ],
    'enums' => [
        'user_status'   => FreshinUp\FreshBusForms\Enums\UserStatus::class,
    ],
    'redirects'         => [
        /**
         * When the users is Unauthenticated (i.e. 'not logged in')
         */
        'unauthenticated'   => 'auth.login',
        /**
         * Usually what happens after login
         */
        'authenticated'     => [
            /**
             * We may instead want to do "landing" routes instead
             */
            'admin'                 => 'admin.index',
            'user'                  => 'customer.index'
        ],
        'policies' => 'policies'
    ],
    'actions' => [
        'search_users' => App\Actions\SearchUsers::class,
    ],
    'helpers' => [
        'user_permissions'  => App\Helpers\UserPermissions::class
    ]
];
