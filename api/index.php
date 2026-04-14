<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

require __DIR__ . '/../vendor/autoload.php';

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function ($middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);
        $middleware->web(append: [
            \App\Http\Middleware\HandleAppearance::class,
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withProviders([
        \App\Providers\AppServiceProvider::class,
        \App\Providers\FortifyServiceProvider::class,
        \Illuminate\View\ViewServiceProvider::class,
        \Inertia\ServiceProvider::class,
    ])
    ->create();

$app->handleRequest(Request::capture());
