<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'image', 'tutor'];

    public function teacherReviews()
    {
        return $this->hasMany(TeacherReview::class);
    }

    public function module()
    {
        return $this->hasMany(Module::class);
    }

    public function moduleReviews()
    {
        return $this->hasMany(ModuleReview::class);
    }
}
