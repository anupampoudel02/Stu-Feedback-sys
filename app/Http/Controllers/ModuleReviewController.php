<?php

namespace App\Http\Controllers;

use App\Models\ModuleReview;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleReviewController extends Controller
{
    public function store(Request $request, $moduleId)
    {
        $request->validate([
            'rating' => 'required|integer|between:1,5',
            'feedback' => 'required|string',
        ]);

        $moduleReview = new ModuleReview();
        $moduleReview->module_id = $moduleId;
        $moduleReview->user_id = auth('sanctum')->id(); // Assuming user is authenticated
        $moduleReview->rating = $request->rating;
        $moduleReview->feedback = $request->feedback;
        $moduleReview->save();

        return response()->json(['message' => 'Feedback submitted successfully', 'data' => $moduleReview], 201);
    }

    public function show($moduleId)
    {
        $module = Module::with('moduleReviews')->find($moduleId);

        if (!$module) {
            return response()->json(['message' => 'Module not found'], 404);
        }

        return response()->json($module->moduleReviews);
    }
}

