<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModuleController extends Controller
{
    // Method to retrieve all modules
    public function index()
    {
        $modules = Module::all(); // Get all modules
        return response()->json($modules);
    }

    public function create()
    {
        $modules = Module::all(); // Get all modules
        return Inertia::render('Module/Create');
    }

    // Method to retrieve a specific module
    public function show($moduleId)
    {
        $module = Module::find($moduleId); // Find a specific module by ID

        if ($module) {
            return response()->json($module);
        }

        return response()->json(['message' => 'Module not found'], 404);
    }

    // Method to create a new module
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
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
            return response()->json(['message' => 'Module not found'], 404);
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

        // Return a response indicating successful update
        return response()->json([
            'message' => 'Module updated successfully',
            'module' => $module
        ]);
    }

    // Method to delete a specific module
    public function destroy($moduleId)
    {
        $module = Module::find($moduleId);

        if (!$module) {
            return response()->json(['message' => 'Module not found'], 404);
        }

        if ($module->image) {
            \Storage::delete('public/' . $module->image);
        }

        // Delete the module
        $module->delete();

        // Return a response indicating successful deletion
        return response()->json(['message' => 'Module deleted successfully']);
    }
}
