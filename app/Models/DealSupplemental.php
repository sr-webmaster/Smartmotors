<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class DealSupplemental
 * @package App\Models
 *
 * @property int $id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * Basic information
 * @property boolean $secured_trade
 * @property boolean $unfunded
 * @property boolean $scheduled
 * @property boolean $carry_over
 * @property string $notes
 *
 * Protection products
 * @property boolean $exterior
 * @property boolean $interior
 * @property boolean $diamon_fusion
 * @property boolean $nosemask
 * @property Carbon $date_rdr
 * @property int $bonus_points
 * @property int $total_points
 *
 * Financial information
 * @property float $holdback
 * @property float $bonus_cash
 * @property float $dealer_fee
 * @property float $dealer_trade_fee
 * @property float $misc_cost
 * @property float $desk_payment
 * @property boolean $fi_declined
 * @property boolean $reconciled
 *
 * Sales compensation
 * @property float $commission
 * @property float $accessory
 * @property float $comp_gross
 * @property boolean $spin
 * @property float $spin_amount
 * @property boolean $spiff
 * @property float $spiff_amount
 * @property boolean $flat
 * @property float $total_compensation
 */
class DealSupplemental extends Model
{
    const TABLE_NAME = "smartmotors_deal_supplementals";
    protected $table = self::TABLE_NAME;
    protected $dates = ['created_at', 'updated_at', 'date_rdr'];
    protected $guarded = ['id'];
}
