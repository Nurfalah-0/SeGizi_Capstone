<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require __DIR__ . '/../bootstrap/app.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

// Handle the request
$request = Request::capture();

// Run migrations and seeds on-the-fly for serverless in-memory DB
$kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
$kernel->call('migrate', ['--force' => true, '--seed' => true]);

$app->handleRequest($request);
