<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require __DIR__ . '/../bootstrap/app.php';

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

// Handle the request
$request = Request::capture();

// Ensure the SQLite database exists in /tmp
$dbPath = '/tmp/database.sqlite';
if (!file_exists($dbPath)) {
    touch($dbPath);
    $kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
    $kernel->call('migrate', ['--force' => true, '--seed' => true]);
}

$app->handleRequest($request);
