<?php

namespace App\Http\Controllers\API;

use App\User;
use App\Enums\UserType;
use App\Enums\UserLevel;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\Filter;
use Spatie\QueryBuilder\QueryBuilder;
use App\Filters\BelongsToWhereInUuidEquals;
use FreshinUp\FreshBusForms\Models\Company\Company;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use FreshinUp\FreshBusForms\Http\Controllers\API\Users\Users as BusUser;
use FreshinUp\FreshBusForms\Actions\CreateUserAsAdmin;
use FreshinUp\FreshBusForms\Actions\UpdateUserAsAdmin;
use FreshinUp\FreshBusForms\Http\Requests\Admin\StoreUsersRequest;
use FreshinUp\FreshBusForms\Http\Requests\Admin\UpdateUsersRequest;

/**
 * Class Users.
 */
class Users extends BusUser
{
    protected function getQuery($request)
    {
        $query = QueryBuilder::for(User::class);

        $searchAction = config('fresh-bus-forms.actions.search_users');

        $query = (new $searchAction)->execute(['request' => $request, 'query' => $query]);

        return $query;
    }

    /**
     * Display a listing of the resource.
     *
     * @param  Request  $request
     *
     * @return UserCollection
     */
    public function index(Request $request)
    {
        $searchAction = config('fresh-bus-forms.actions.search_users');
        $filterAction = config('fresh-bus-forms.actions.filter_users');

        $query = (new $filterAction)->execute(['request' => $request]);

        $query = (new $searchAction)->execute(['request' => $request, 'query' => $query]);

        return UserResource::collection($query->jsonPaginate());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreUsersRequest $request
     *
     * @param CreateUserAsAdmin $action
     * @return UserResource
     */
    public function store(StoreUsersRequest $request, CreateUserAsAdmin $action)
    {
        $company = Company::firstOrCreate([
            'name' => $request->company_name
        ]);

        $data = array_merge(
            $request->validated(),
            ['company_id' => $company->id]
        );

        $user = $action->execute($data);

        return (new UserResource($user))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateUsersRequest $request
     * @param $id
     *
     * @return UserResource
     */
    public function update(UpdateUsersRequest $request, $id, UpdateUserAsAdmin $action)
    {
        $company = Company::firstOrCreate([
            'name' => $request->company_name
        ]);

        $data = array_merge($request->validated(), ['id' => $id, 'company_id' => $company->id ]);

        $user = $action->execute($data);

        return new UserResource($user);
    }
}
