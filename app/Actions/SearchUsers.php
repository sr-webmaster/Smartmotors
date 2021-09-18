<?php

namespace App\Actions;

use Illuminate\Support\Facades\DB;
use FreshinUp\FreshBusForms\Actions\SearchUsers as FreshSearchUsers;

class SearchUsers extends FreshSearchUsers
{
    public function execute($data)
    {
        $request = $data['request'];
        $query = $data['query'];

        $searchTerm = null;

        if ($request->has('q')) {
            $searchTerm = $request->get('q');
        }
        if ($request->has('term')) {
            $searchTerm = $request->get('term');
        }
        if ($searchTerm) {
            $query->where(function ($q) use ($searchTerm) {
                if (DB::getDriverName() === 'sqlite') {
                    $q->orWhere(DB::raw('first_name || " " || last_name'), 'LIKE', '%' . $searchTerm . '%');
                } else {
                    $q->orWhere(DB::raw('CONCAT(first_name, " ", last_name)'), 'LIKE', '%' . $searchTerm . '%');
                }
                $q->orWhere('email', 'LIKE', '%' . $searchTerm . '%');
            
                // Phone Number
                $q->orWhere('mobile_phone', 'LIKE', '%' . $searchTerm . '%');
                $q->orWhere('office_phone', 'LIKE', '%' . $searchTerm . '%');
                
                // Customer #
                $q->orWhere('id', 'LIKE', $searchTerm);
            });
        }

        return $query;
    }
}
