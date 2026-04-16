<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Seeder;

class ArticleRecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear existing data
        Schema::disableForeignKeyConstraints();
        Article::truncate();
        Recipe::truncate();
        User::where('email', 'NutriFlow@gmail.com')->delete();
        Schema::enableForeignKeyConstraints();

        // Create Admin User for testing the Admin Dashboard
        User::create([
            'name' => 'Admin NutriFlow',
            'email' => 'NutriFlow@gmail.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin',
        ]);

        // Articles
        $articles = [
            [
                'title' => '9 Tips Pola Hidup Sehat untuk Pemula',
                'excerpt' => 'Mulai perjalanan sehatmu dari hal-hal kecil seperti manajemen pola tidur dan hidrasi yang cukup setiap harinya.',
                'category' => 'Gaya Hidup',
                'author' => 'Dr. Sarah Gizi',
                'read_time' => '8 min baca',
                'image' => '/images/hidrasi.jpg',
                'is_popular' => true,
                'content' => [
                    ['type' => 'p', 'text' => 'Mulai perjalanan sehatmu dari hal-hal kecil seperti manajemen pola tidur dan hidrasi yang cukup setiap harinya.'],
                    ['type' => 'h2', 'text' => 'Mengapa Hidrasi Sangat Penting Bagi Pemula?'],
                    ['type' => 'p', 'text' => 'Saat Anda terhidrasi dengan baik, darah mengalir lebih mudah membawa oksigen.'],
                    ['type' => 'quote', 'text' => 'Hidrasi bukan sekadar menghilangkan haus.']
                ],
            ],
            [
                'title' => 'Tidur Berkualitas',
                'excerpt' => 'Mengungkap misteri tentang berapa lama waktu ideal yang diperlukan untuk pemulihan otot dan sel tubuh.',
                'category' => 'Mitos & Fakta',
                'author' => 'Dr. John Doe',
                'read_time' => '6 min baca',
                'image' => '/images/tidur.jpg',
                'is_popular' => true,
                'content' => [
                    ['type' => 'p', 'text' => 'Mengungkap misteri tentang berapa lama waktu ideal yang diperlukan untuk pemulihan otot.'],
                    ['type' => 'h2', 'text' => 'Siklus Tidur yang Baik'],
                    ['type' => 'p', 'text' => 'Tidur 7-8 jam per malam memastikan hormon pertumbuhan dilepaskan.'],
                    ['type' => 'quote', 'text' => 'Tidur adalah bentuk latihan pasif yang paling efektif.']
                ],
            ],
            [
                'title' => 'Rahasia Nutrisi Tulang Kuat',
                'excerpt' => 'Makanan super apa saja yang wajib kamu konsumsi agar tulangmu kuat dan bebas osteoporosis di masa tua?',
                'category' => 'Nutrisi & Gizi',
                'author' => 'Prof. Bone',
                'read_time' => '5 min baca',
                'image' => '/images/nutrisi tulang.jpg',
                'is_popular' => true,
                'content' => [
                    ['type' => 'p', 'text' => 'Makanan super apa saja yang wajib kamu konsumsi agar tulangmu kuat?'],
                    ['type' => 'h2', 'text' => 'Sumber Nutrisi'],
                    ['type' => 'p', 'text' => 'Sinar matahari pagi adalah sumber vitamin D terbaik.']
                ],
            ],
            [
                'title' => 'Tips Mengatur Meal Prep Seminggu',
                'excerpt' => 'Cara efisien menyiapkan makanan sehat dalam 2 jam untuk konsumsi selama seminggu penuh.',
                'category' => 'Tips & Trik',
                'author' => 'Chef Healthy',
                'read_time' => '12 min baca',
                'image' => 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
                'is_popular' => false,
                'content' => [
                    ['type' => 'p', 'text' => 'Meal prep adalah cara terbaik untuk tetap disiplin pada program diet Anda.'],
                    ['type' => 'h2', 'text' => 'Langkah Awal Meal Prep'],
                    ['type' => 'p', 'text' => 'Pilihlah satu hari dalam seminggu untuk mencuci dan memotong bahan dasar.']
                ],
            ],
            [
                'title' => 'Superfood Lokal: Tempe vs Tahu',
                'excerpt' => 'Mana yang lebih unggul untuk kebutuhan protein nabati Anda? Simak perbandingan nutrisinya.',
                'category' => 'Nutrisi & Gizi',
                'author' => 'Dr. Sarah Gizi',
                'read_time' => '7 min baca',
                'image' => 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
                'is_popular' => false,
                'content' => [
                    ['type' => 'p', 'text' => 'Tempe dan tahu adalah protein nabati yang sangat baik.'],
                    ['type' => 'h2', 'text' => 'Kandungan Protein'],
                    ['type' => 'p', 'text' => 'Tempe memiliki kandungan protein yang lebih padat.']
                ],
            ]
        ];

        foreach ($articles as $article) {
            Article::create($article);
        }

        // Recipes
        $recipes = [
            [
                'title' => 'Pasta Carbonara Sehat',
                'category' => 'Tinggi Protein',
                'goal' => 'Diet',
                'calories' => 420,
                'protein' => 35,
                'cook_time' => 20,
                'image' => '/images/carbonara.jpg',
                'description' => 'Nikmati pasta lezat yang telah dimodifikasi agar kaya protein dan lebih sehat untuk diet Anda.',
                'is_popular' => true,
            ],
            [
                'title' => 'Nasi Campur Sayur',
                'category' => 'Rendah Kalori',
                'goal' => 'Diet',
                'calories' => 310,
                'protein' => 28,
                'cook_time' => 15,
                'image' => '/images/lauk.png',
                'description' => 'Kombinasi nasi dan beraneka lauk pauk bergizi seimbang untuk hidangan keluarga.',
                'is_popular' => true,
            ],
            [
                'title' => 'Jus Detoks Hidrasi',
                'category' => 'Tinggi Serat',
                'goal' => 'Diet',
                'calories' => 120,
                'protein' => 2,
                'cook_time' => 5,
                'image' => '/images/hidrasi.jpg',
                'description' => 'Minuman pelepas dahaga yang kaya serat dan baik untuk melancarkan pencernaan harian.',
                'is_popular' => true,
            ],
            [
                'title' => 'Pecel Sayur Madiun',
                'category' => 'Makan Siang',
                'goal' => 'Diet',
                'calories' => 320,
                'protein' => 8,
                'cook_time' => 30,
                'image' => 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
                'description' => 'Pecel sayur khas Madiun dengan bumbu kacang gurih dan sayuran segar pilihan, rendah kalori namun mengenyangkan.',
                'is_popular' => false,
            ],
            [
                'title' => 'Dada Ayam Bakar Madu',
                'category' => 'Makan Siang',
                'goal' => 'Bulking',
                'calories' => 680,
                'protein' => 45,
                'cook_time' => 35,
                'image' => 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop',
                'description' => 'Dada ayam empuk dengan olesan madu dan rempah, tinggi protein untuk pertumbuhan otot maksimal.',
                'is_popular' => false,
            ],
            [
                'title' => 'Smoothie Bowl Berry',
                'category' => 'Cemilan',
                'goal' => 'Diet',
                'calories' => 250,
                'protein' => 10,
                'cook_time' => 10,
                'image' => 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&auto=format&fit=crop',
                'description' => 'Cemilan segar kaya antioksidan dengan topping granola dan buah beri segar.',
                'is_popular' => false,
            ]
        ];

        foreach ($recipes as $recipe) {
            Recipe::create($recipe);
        }
    }
}
