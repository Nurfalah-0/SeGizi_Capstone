<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'NutriFlow@gmail.com'],
            [
                'name' => 'NutriFlow Master Admin',
                'password' => Hash::make('Admin 123321'),
                'role' => 'admin',
                'email_verified_at' => now(),
            ]
        );
    }
}
