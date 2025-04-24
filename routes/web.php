<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\ModuleController;

Route::middleware(['auth', 'verified'])->group(function () {
Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');
Route::prefix('admin')->middleware('auth')->as('admin.')->group(function () {
    Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::resource('module-reviews', AdminController::class); // or define custom methods
    Route::resource('teacher-reviews', AdminController::class);
    Route::resource('modules', ModuleController::class);
    // Feedbacks
    Route::get('feedbacks', [AdminController::class, 'indexFeedbacks'])->name('admin.feedbacks.index');

    // Students
    Route::get('students', [AdminController::class, 'indexStudents'])->name('admin.students.index');
});
// Apply middleware for authenticated and verified users
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('home');

    // Use the controller for the Module resource
    // Route::resource('module', ModuleController::class);
    // Route::get('/admin/modules/create', [ModuleController::class, 'create'])->name('admin.modules.create');
    // Route::post('/admin/modules', [ModuleController::class, 'store'])->name('admin.modules.store');
});

include __DIR__ . '/auth.php';

