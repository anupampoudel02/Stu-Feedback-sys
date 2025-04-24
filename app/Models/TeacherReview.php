<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherReview extends Model
{
    use HasFactory;

    protected $fillable = ['teacher_id', 'module_id', 'rating', 'feedback'];

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}