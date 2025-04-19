<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherReviewsTable extends Migration
{
    public function up()
    {
        Schema::create('teacher_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users'); // Assuming the teacher is a user
            $table->foreignId('module_id')->constrained('modules');
            $table->integer('rating'); // Rating from 1 to 5
            $table->text('feedback');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('teacher_reviews');
    }
};