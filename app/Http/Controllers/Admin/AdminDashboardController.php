<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'articles' => Article::all(),
            'recipes' => Recipe::all(),
        ]);
    }

    public function toggleArticlePopular(Article $article)
    {
        $article->update([
            'is_popular' => !$article->is_popular
        ]);

        return back()->with('success', 'Status popularitas artikel berhasil diubah.');
    }

    public function toggleRecipePopular(Recipe $recipe)
    {
        $recipe->update([
            'is_popular' => !$recipe->is_popular
        ]);

        return back()->with('success', 'Status popularitas resep berhasil diubah.');
    }
}
