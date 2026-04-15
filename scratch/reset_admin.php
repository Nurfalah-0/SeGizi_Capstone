<?php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$user = \App\Models\User::where('email', 'NutriFlow@gmail.com')->first();
if ($user) {
    $user->password = \Illuminate\Support\Facades\Hash::make('admin123');
    $user->save();
    echo "Password reset successfully for NutriFlow@gmail.com to 'admin123'\n";
} else {
    echo "User not found\n";
}
