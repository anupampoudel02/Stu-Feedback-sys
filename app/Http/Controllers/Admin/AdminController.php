<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ModuleReview;
use App\Models\TeacherReview;
use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // Display admin dashboard
    public function index()
    {
    
        // Example dashboard data - count of each model
        $modulesCount = Module::count();
        $teacherReviewsCount = TeacherReview::count();
        $moduleReviewsCount = ModuleReview::count();

        // Pass data to the Inertia component (AdminPanel)
        return Inertia::render('Admin/AdminPanel', [
            'modulesCount' => $modulesCount,
            'teacherReviewsCount' => $teacherReviewsCount,
            'moduleReviewsCount' => $moduleReviewsCount,
        ]);

        return Inertia::render('welcome', [
            'feedbackStats' => [
                'total' => $totalFeedbacks,
                'teacherReviews' => $totalTeacherReviews,
                'actionsNeeded' => $actionsNeededPercentage,
            ],
            'studentStats' => [
                'total' => $totalStudents,
            ],
        ]);
        
    }

    // Manage Module Reviews - list all reviews
    public function indexModuleReviews()
    {
        $reviews = ModuleReview::all();

        // Render the Inertia component for managing module reviews
        return Inertia::render('Admin/ModuleReviews', [
            'reviews' => $reviews,
        ]);
    }

    // Manage Teacher Reviews - list all reviews
    public function indexTeacherReviews()
    {
        $reviews = TeacherReview::all();

        // Render the Inertia component for managing teacher reviews
        return Inertia::render('Admin/TeacherReviews', [
            'reviews' => $reviews,
        ]);
    }

    // Manage Modules - list all modules
    public function indexModules()
    {
        $modules = Module::all();

        // Render the Inertia component for managing modules
        return Inertia::render('Admin/Modules', [
            'modules' => $modules,
        ]);
    }
}
