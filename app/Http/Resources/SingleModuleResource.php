<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleModuleResource extends JsonResource
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
            'description' => $this->description,
            'image' => asset($this->image),
            'tutor' => $this->tutor,
            'rating_avg' => round($this->module_reviews_avg_rating, 1),
            'reviews_count' => $this->module_reviews_count,
            'feedbacks' => $this->whenLoaded('moduleReviews', ListFeedbackResource::collection($this->moduleReviews))
        ];
    }
}
