<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'title',
        'category',
        'goal',
        'calories',
        'protein',
        'cook_time',
        'image',
        'description',
        'is_popular',
    ];
}
