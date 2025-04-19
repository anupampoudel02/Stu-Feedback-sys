<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModuleReviewsTable extends Migration
{
    public function up()
    {
        Schema::create('module_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('module_id')->constrained('modules');
            $table->foreignId('user_id')->constrained('users'); // Assuming the user is a student
            $table->integer('rating'); // Rating from 1 to 5
            $table->text('feedback');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('module_reviews');
    }
};
