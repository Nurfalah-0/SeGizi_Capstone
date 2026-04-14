<?php

use App\Providers\AppServiceProvider;
use App\Providers\FortifyServiceProvider;

return [
    AppServiceProvider::class,
    FortifyServiceProvider::class,
    Illuminate\View\ViewServiceProvider::class,
    Inertia\ServiceProvider::class,
];
