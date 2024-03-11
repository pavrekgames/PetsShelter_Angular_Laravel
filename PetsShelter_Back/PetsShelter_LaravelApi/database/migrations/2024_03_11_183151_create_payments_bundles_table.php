<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments_bundles', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('payment_id')->constrained('payments')->cascadeOnDelete();
            $table->foreignId('bundle_id')->constrained('bundles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments_bundles');
    }
};
