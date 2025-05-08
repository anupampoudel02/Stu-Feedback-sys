<?php

namespace App\Http\Controllers\Api\Module;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleModuleResource;
use App\Models\Module;
use Illuminate\Http\Request;

class GetSingleModuleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $id)
    {
        $module = Module::with('moduleReviews')->withCount('moduleReviews')->withAvg('moduleReviews', 'rating')->findOrFail($id);

        return new SingleModuleResource($module);
    }
}
