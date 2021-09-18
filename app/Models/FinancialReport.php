<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\SoftDeletes;

class FinancialReport extends Model
{
    use SoftDeletes;

    public $table = 'financial_reports';
    protected $guarded = [];
    protected $dates = ['created_at', 'updated_at', 'deleted_at'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function modifier1()
    {
        return $this->belongsTo(Modifier::class, 'modifier_1_id');
    }

    public function modifier2()
    {
        return $this->belongsTo(Modifier::class, 'modifier_2_id');
    }
}
