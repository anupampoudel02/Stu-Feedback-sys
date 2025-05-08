<?php

namespace App\Http\Controllers\Api\Module;

use App\Http\Controllers\Controller;
use App\Http\Resources\ListModuleResource;
use App\Models\Module;
use Illuminate\Http\Request;

class GetModuleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $modules = Module::withCount('moduleReviews')->withAvg('moduleReviews', 'rating')->get();


        return ListModuleResource::collection($modules);
    }
}
