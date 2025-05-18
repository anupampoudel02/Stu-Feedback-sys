<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListFeedbackResource extends JsonResource
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
            'module' => $this->module->name,
            'user' =>$this->is_anonymous ? 'Anonymous':  $this->user,
            'rating' => $this->rating,
            'feedback' => $this->feedback,
            
            'is_anonymous' => $this->is_anonymous,
            'created_at' => $this->created_at
        ];
    }
}
