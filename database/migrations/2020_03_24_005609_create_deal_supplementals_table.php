<?php

use App\Models\DealSupplemental;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealSupplementalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DealSupplemental::TABLE_NAME, function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            // Basic information
            $table->boolean('secured_trade')->nullable();
            $table->boolean('unfunded')->nullable();
            $table->boolean('scheduled')->nullable();
            $table->boolean('carry_over')->nullable();
            $table->string('notes')->nullable();

            // Protection products
            $table->boolean('exterior')->nullable();
            $table->boolean('interior')->nullable();
            $table->boolean('diamon_fusion')->nullable();
            $table->boolean('nosemask')->nullable();
            $table->dateTime('date_rdr')->nullable();
            $table->integer('bonus_points')->nullable();
            $table->integer('total_points')->nullable();

            // Financial information
            $table->float('holdback')->nullable();
            $table->float('bonus_cash')->nullable();
            $table->float('dealer_fee')->nullable();
            $table->float('dealer_trade_fee')->nullable();
            $table->float('misc_cost')->nullable();
            $table->float('desk_payment')->nullable();
            $table->boolean('fi_declined')->nullable();
            $table->boolean('reconciled')->nullable();

            // Sales compensation
            $table->float('commission');
            $table->float('accessory');
            $table->float('comp_gross');
            $table->boolean('spin');
            $table->float('spin_amount');
            $table->boolean('spiff');
            $table->float('spiff_amount');
            $table->boolean('flat');
            $table->float('total_compensation');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DealSupplemental::TABLE_NAME);
    }
}
