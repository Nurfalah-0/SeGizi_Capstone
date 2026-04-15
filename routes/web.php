<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

// Fortify authentication routes
// require base_path('routes/auth.php');

Route::get('/', function () {
    return inertia('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'popularArticles' => \App\Models\Article::where('is_popular', true)->take(3)->get(),
        'popularRecipes' => \App\Models\Recipe::where('is_popular', true)->take(3)->get(),
    ]);
})->name('home');

// Public routes - accessible without login
Route::inertia('about', 'Static/About')->name('about');
Route::inertia('contact', 'Static/Contact')->name('contact');
Route::inertia('report-bug', 'Static/ReportBug')->name('report-bug');
Route::inertia('privacy', 'Static/Privacy')->name('privacy');
Route::inertia('terms', 'Static/Terms')->name('terms');

Route::get('recipes', function () {
    return inertia('Recipes/Index', [
        'recipes' => \App\Models\Recipe::all(),
    ]);
})->name('recipes.index');
Route::get('recipes/{recipe}', function ($recipe) {
    return inertia('Recipes/Show', ['recipe' => $recipe]);
})->name('recipes.show');

Route::get('articles', function () {
    return inertia('Articles/Index', [
        'articles' => \App\Models\Article::all(),
    ]);
})->name('articles.index');
Route::get('articles/{article}', function ($article) {
    return inertia('Articles/Show', ['article' => $article]);
})->name('articles.show');

Route::get('recommendations', function () {
    return inertia('Calculator/Result');
})->name('recommendations');

// Protected routes - require login
Route::middleware(['auth'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    // Admin routes
    Route::middleware(['admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', [\App\Http\Controllers\Admin\AdminDashboardController::class, 'index'])->name('dashboard');
        Route::patch('/articles/{article}/toggle-popular', [\App\Http\Controllers\Admin\AdminDashboardController::class, 'toggleArticlePopular'])->name('articles.toggle-popular');
        Route::patch('/recipes/{recipe}/toggle-popular', [\App\Http\Controllers\Admin\AdminDashboardController::class, 'toggleRecipePopular'])->name('recipes.toggle-popular');
    });
});

require __DIR__ . '/settings.php';


