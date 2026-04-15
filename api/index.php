<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require __DIR__ . '/../bootstrap/app.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

// Handle the request
$request = Request::capture();

// Run migrations on-the-fly for serverless in-memory DB
Artisan::call('migrate', ['--force' => true]);

$app->handleRequest($request);
