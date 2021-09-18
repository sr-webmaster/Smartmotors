<?php

namespace App\Http\Resources;

use App\Models\DealSupplemental;
use Illuminate\Http\Resources\Json\JsonResource;

class DealSupplementalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  mixed  $request
     *
     * @return array
     */
    public function toArray($request)
    {
        /** @var DealSupplemental $supplemental */
        $supplemental = $this;
        return [
            'id' => $supplemental->id,
            'created_at' => $supplemental->created_at,
            'updated_at' => $supplemental->updated_at,

            // Basic information
            'secured_trade' => $supplemental->secured_trade,
            'unfunded' => $supplemental->unfunded,
            'scheduled' => $supplemental->scheduled,
            'carry_over' => $supplemental->carry_over,
            'notes' => $supplemental->notes,

            // Protection products
            'exterior' => $supplemental->exterior,
            'interior' => $supplemental->interior,
            'diamon_fusion' => $supplemental->diamon_fusion,
            'nosemask' => $supplemental->nosemask,
            'date_rdr' => $supplemental->date_rdr,
            'bonus_points' => $supplemental->bonus_points,
            'total_points' => $supplemental->total_points,

            // Financial information
            'holdback' => $supplemental->holdback,
            'bonus_cash' => $supplemental->bonus_cash,
            'dealer_fee' => $supplemental->dealer_fee,
            'dealer_trade_fee' => $supplemental->dealer_trade_fee,
            'misc_cost' => $supplemental->misc_cost,
            'desk_payment' => $supplemental->desk_payment,
            'fi_declined' => $supplemental->fi_declined,
            'reconciled' => $supplemental->reconciled,

            // Sales compensation
            'commission' => $supplemental->commission,
            'accessory' => $supplemental->accessory,
            'comp_gross' => $supplemental->comp_gross,
            'spin' => $supplemental->spin,
            'spin_amount' => $supplemental->spin_amount,
            'spiff' => $supplemental->spiff,
            'spiff_amount' => $supplemental->spiff_amount,
            'flat' => $supplemental->flat,
            'total_compensation' => $supplemental->total_compensation,
        ];
    }
}
