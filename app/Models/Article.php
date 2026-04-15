<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'title',
        'excerpt',
        'category',
        'author',
        'read_time',
        'image',
        'is_popular',
    ];
}
