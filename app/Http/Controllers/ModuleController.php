<?php

namespace App\Http\Controllers;

use App\Http\Resources\ListModuleResource;
use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModuleController extends Controller
{
    // Method to retrieve all modules
    public function index()
    {
        $modules = ListModuleResource::collection(Module::all()); // Get all modules
        return Inertia::render('Module/Index', compact('modules'));
    }

    public function create()
    {
        $modules = Module::all(); // Get all modules
        return Inertia::render('Module/Create');
    }

    // Add this method after create()
    public function edit($id)
    {
        $module = Module::findOrFail($id);
        return Inertia::render('Module/Edit', [
            'module' => $module
        ]);
    }

    // Method to retrieve a specific module
    public function show($id)
    {
        $module = Module::with(['moduleReviews.user', 'moduleReviews' => function($query) {
            $query->latest();
        }])->findOrFail($id);

        $averageRating = $module->moduleReviews->avg('rating');
        $totalReviews = $module->moduleReviews->count();
        return Inertia::render('Module/Show', [
            'module' => $module,
            'averageRating' => round($averageRating, 1),
            'totalReviews' => $totalReviews,
            'reviews' => $module->moduleReviews
        ]);
    }

    // Method to create a new module
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'tutor' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validatedData['image'] = $request->file('image')->store('modules', 'public');
        }


        // // Create a new module
        Module::create($validatedData);

    }

    // Method to update an existing module
    public function update(Request $request, $moduleId)
    {
        $module = Module::find($moduleId);

        if (!$module) {
            return response()->json(['message' => 'Module not found 2'], 404);
        }

        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

        ]);

        if ($request->hasFile('image')) {
            // Delete the old image if it exists
            if ($module->image) {
                \Storage::delete('public/' . $module->image);
            }
            // Store the new image
            $validatedData['image'] = $request->file('image')->store('modules', 'public');
        }

        // Update the module
        $module->update($validatedData);

    }

    // Method to delete a specific module
    public function destroy($moduleId)
    {
        $module = Module::with('moduleReviews')->findOrFail($moduleId);

        // Delete the module
        $module->delete();

    }

    public function feedbackPanel()
    {
        $modules = Module::withCount('moduleReviews')
            ->withAvg('moduleReviews', 'rating')
            ->get()
            ->map(function ($module) {
                return [
                    'id' => $module->id,
                    'name' => $module->name,
                    'description' => $module->description,
                    'average_rating' => round($module->module_reviews_avg_rating ?? 0, 1),
                    'total_reviews' => $module->module_reviews_count,
                ];
            });

        return Inertia::render('Module/FeedbackPanel', [
            'modules' => $modules
        ]);
    }
}
