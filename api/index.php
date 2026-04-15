<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require __DIR__ . '/../bootstrap/app.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

// Handle the request
$request = Request::capture();

// Boot the application and run migrations on-the-fly for serverless in-memory DB
$app->make(\Illuminate\Contracts\Console\Kernel::class)->call('migrate', ['--force' => true]);

$app->handleRequest($request);
