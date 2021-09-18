<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Modifier extends Model
{
    public $table = 'modifiers';
    protected $guarded = [];
    protected $dates = ['created_at', 'updated_at'];
}
