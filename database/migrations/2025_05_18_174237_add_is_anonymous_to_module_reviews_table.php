<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('module_reviews', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->change(); // Assuming the user is a student
            $table->boolean('is_anonymous');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('module_reviews', function (Blueprint $table) {
            $table->dropColumn('is_anonymous');
        });
    }
};
