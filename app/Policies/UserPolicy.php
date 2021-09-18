<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Enums\UserLevel as UserLevelEnum;
use App\Enums\UserType as UserTypeEnum;

class UserPolicy
{
    use HandlesAuthorization;
    
    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function view(User $user, User $model)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // Sales Rep cannot create users
        return $user->user_level->display_id != UserLevelEnum::SALES_REP;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function update(User $user, User $model)
    {
        // User can edit himself
        if ($user->id == $model->id) {
            return true;
        }

        // Manager cannot update employees
        if ($user->user_level->display_id == UserLevelEnum::MANAGER) {
            return $model->user_type->display_id != UserTypeEnum::EMPLOYEE;
        }

        // Sales Rep cannot update users
        return $user->user_level->display_id != UserLevelEnum::SALES_REP;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function delete(User $user, User $model)
    {
        // Manager cannot delete employees
        if ($user->user_level->display_id == UserLevelEnum::MANAGER) {
            return $model->user_type->display_id != UserTypeEnum::EMPLOYEE;
        }

        // Sales Rep cannot delete users
        return $user->user_level->display_id != UserLevelEnum::SALES_REP;
    }
}
