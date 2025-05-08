<?php

namespace App\Http\Controllers;

use App\Models\ModuleReview;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleReviewController extends Controller
{
    public function store(Request $request, $moduleId)
    {
        $module = Module::find($moduleId);

        $user = auth('sanctum')->user();

        $reviewExists = $user->whereHas('reviews', function ($q)  use ($module) {
            $q->where('id', $module->id);
        });

        if($reviewExists) {
            return response()->json([
                'message' => 'Cannot review same module twice.'
            ], 422);
        }

        if(!$module) {
            return response()->json([
                'message' => 'Module not found'
            ], 404);
        }
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

        return response()->json([
            'data' => $module->moduleReviews
        ]);
    }

    public function update(Request $request, $moduleId, $reviewId)
    {
        $review = ModuleReview::where('id', $reviewId)
            ->where('module_id', $moduleId)
            ->where('user_id', auth()->id())
            ->firstOrFail();

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'feedback' => 'required|string|max:500',
        ]);

        $review->update($validated);

        return response()->json([
            'message' => 'Review updated successfully',
            'data' => $review
        ]);
    }
}

