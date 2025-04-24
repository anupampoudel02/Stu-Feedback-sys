<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;
use App\Models\Review;
use App\Policies\ReviewPolicy;

class AppServiceProvider extends ServiceProvider
{

    
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        ResetPassword::createUrlUsing(function (User $user, string $token) {
            return 'http://localhost:3001/reset-password?token='.$token."&email={$user->email}";
        });
    }
}
 
