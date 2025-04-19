<?php

namespace App\Http\Controllers;

use App\Models\TeacherReview;
use App\Models\Module;
use Illuminate\Http\Request;

class TeacherReviewController extends Controller
{
    public function store(Request $request, $teacherId, $moduleId)
    {
        $request->validate([
            'rating' => 'required|integer|between:1,5',
            'feedback' => 'required|string',
        ]);

        $teacherReview = new TeacherReview();
        $teacherReview->teacher_id = $teacherId;
        $teacherReview->module_id = $moduleId;
        $teacherReview->rating = $request->rating;
        $teacherReview->feedback = $request->feedback;
        $teacherReview->save();

        return response()->json(['message' => 'Feedback submitted successfully', 'data' => $teacherReview], 201);
    }

    public function show($teacherId, $moduleId)
    {
        $reviews = TeacherReview::where('teacher_id', $teacherId)->where('module_id', $moduleId)->get();

        return response()->json($reviews);
    }
}

