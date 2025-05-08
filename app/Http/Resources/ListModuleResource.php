<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListModuleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'image' => asset('storage/'.$this->image),
            'tutor' => $this->tutor,
            'rating_avg' => round($this->module_reviews_avg_rating, 1),
            'reviews_count' => $this->module_reviews_count,
        ];
    }
}
