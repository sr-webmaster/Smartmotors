<?php

namespace App\Http\Controllers\API\Sales\v1;

use App\User;
use App\Enums\UserType;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\QueryBuilder;
use App\Http\Resources\User as UserResource;
use FreshinUp\FreshBusForms\Http\Controllers\API\Users\Users as BusUser;

/**
 * Class Users.
 */
class Customers extends BusUser
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
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $users = $this->getQuery($request)
            ->where('type', UserType::CUSTOMER);

        return UserResource::collection($users->get());
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     *
     * @return UserResource
     */
    public function show($id)
    {
        $User = config('fresh-bus-forms.models.user');
        $user = QueryBuilder::for($User)
            ->where('pbs_id', $id)
            ->allowedIncludes(['company.users', 'teams.users'])
            ->firstOrFail();

        $resourceClass = config('fresh-bus-forms.resources.user');
        return new $resourceClass($user);
    }
}
