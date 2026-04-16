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
            'articles' => Article::orderBy('created_at', 'desc')->get(),
            'recipes' => Recipe::orderBy('created_at', 'desc')->get(),
        ]);
    }

    // Article CRUD
    public function storeArticle(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'category' => 'required|string',
            'author' => 'required|string',
            'read_time' => 'required|string',
            'image' => 'required|string',
            'content' => 'nullable|string', // Pastikan dikirim sebagai string JSON dari frontend
            'is_popular' => 'nullable|boolean',
        ]);

        Article::create($validated);
        return back()->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function updateArticle(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string',
            'category' => 'required|string',
            'author' => 'required|string',
            'read_time' => 'required|string',
            'image' => 'required|string',
            'content' => 'nullable|string',
            'is_popular' => 'nullable|boolean',
        ]);

        $article->update($validated);
        return back()->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroyArticle(Article $article)
    {
        $article->delete();
        return back()->with('success', 'Artikel berhasil dihapus.');
    }

    public function toggleArticlePopular(Article $article)
    {
        $article->update(['is_popular' => !$article->is_popular]);
        return back();
    }

    // Recipe CRUD
    public function storeRecipe(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'goal' => 'required|string',
            'calories' => 'required|integer',
            'protein' => 'required|integer',
            'cook_time' => 'required|integer',
            'image' => 'required|string',
            'description' => 'required|string',
            'is_popular' => 'nullable|boolean',
        ]);

        Recipe::create($validated);
        return back()->with('success', 'Resep berhasil ditambahkan.');
    }

    public function updateRecipe(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'goal' => 'required|string',
            'calories' => 'required|integer',
            'protein' => 'required|integer',
            'cook_time' => 'required|integer',
            'image' => 'required|string',
            'description' => 'required|string',
        ]);

        $recipe->update($validated);
        return back()->with('success', 'Resep berhasil diperbarui.');
    }

    public function destroyRecipe(Recipe $recipe)
    {
        $recipe->delete();
        return back()->with('success', 'Resep berhasil dihapus.');
    }

    public function toggleRecipePopular(Recipe $recipe)
    {
        $recipe->update(['is_popular' => !$recipe->is_popular]);
        return back();
    }
}
