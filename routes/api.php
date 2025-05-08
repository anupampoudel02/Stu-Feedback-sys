<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Module\GetModuleController;
use App\Http\Controllers\Api\Module\GetSingleModuleController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ModuleReviewController;
use App\Http\Controllers\TeacherReviewController;


Route::prefix('modules')->group(function () {
    Route::get('list', GetModuleController::class);
    Route::get('/{id}', GetSingleModuleController::class);
});

// Route::get('modules', [ModuleController::class, 'index']); // Get all modules
// Route::get('modules/{moduleId}', [ModuleController::class, 'show']);

Route::middleware('auth:sanctum')->post('modules/{moduleId}/reviews', [ModuleReviewController::class, 'store']);
Route::middleware('auth:sanctum')->get('modules/{moduleId}/reviews', [ModuleReviewController::class, 'show']);

// Add this new route for updating a specific review
Route::middleware('auth:sanctum')->put('modules/{moduleId}/reviews/{reviewId}', [ModuleReviewController::class, 'update']);
// Or if you prefer PATCH (for partial updates)
Route::middleware('auth:sanctum')->patch('modules/{moduleId}/reviews/{reviewId}', [ModuleReviewController::class, 'update']);

Route::post('teachers/{teacherId}/modules/{moduleId}/reviews', [TeacherReviewController::class, 'store']);
Route::get('teachers/{teacherId}/modules/{moduleId}/reviews', [TeacherReviewController::class, 'show']);

Route::middleware('auth:sanctum')->put('/user', function (Request $request) {
    $validate = $request->validate([
        'email' => 'required|email|ends_with:@heraldcollege.edu.np|unique:users,id,'.auth()->id(),
        'name' => 'required|string|max:100',
    ]);

    auth('sanctum')->user()->update($validate);

    return response()->json(['message' => 'Updated user successfully!']);
});
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/forgot-password',[AuthController::class,'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
