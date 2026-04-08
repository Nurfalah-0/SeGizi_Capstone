<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-vue-next';

import hidrasiImage from '../../../images/hidrasi.jpg';
import tidurImage from '../../../images/tidur.jpg';
import nutrisiImage from '../../../images/nutrisi tulang.jpg';

const searchQuery = ref('');
const activeCategory = ref('Semua');

const categories = ['Semua', 'Gaya Hidup Sehat', 'Mitos & Fakta', 'Nutrisi & Gizi', 'Tips & Trik'];

const articles = [
    {
        id: 1,
        title: '9 Tips Pola Hidup Sehat untuk Pemula',
        excerpt: 'Mulai perjalanan sehatmu dari hal-hal kecil seperti manajemen pola tidur dan hidrasi yang cukup setiap harinya.',
        category: 'Gaya Hidup',
        author: 'Dr. Sarah Gizi',
        date: '12 Mar 2026',
        readTime: '8 min baca',
        image: hidrasiImage,
    },
    {
        id: 2,
        title: 'Tidur Berkualitas',
        excerpt: 'Mengungkap misteri tentang berapa lama waktu ideal yang diperlukan untuk pemulihan otot dan sel tubuh.',
        category: 'Mitos & Fakta',
        author: 'Dr. John Doe',
        date: '14 Mar 2026',
        readTime: '6 min baca',
        image: tidurImage,
    },
    {
        id: 3,
        title: 'Rahasia Nutrisi Tulang Kuat',
        excerpt: 'Makanan super apa saja yang wajib kamu konsumsi agar tulangmu kuat dan bebas osteoporosis di masa tua?',
        category: 'Nutrisi & Gizi',
        author: 'Prof. Bone',
        date: '20 Mar 2026',
        readTime: '5 min baca',
        image: nutrisiImage,
    },
    {
        id: 5,
        title: 'Tips Mengatur Meal Prep Seminggu',
        excerpt: 'Cara efisien menyiapkan makanan sehat dalam 2 jam untuk konsumsi selama seminggu penuh.',
        category: 'Tips & Trik',
        author: 'Chef Healthy',
        date: '22 Mar 2026',
        readTime: '12 min baca',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Superfood Lokal: Tempe vs Tahu',
        excerpt: 'Mana yang lebih unggul untuk kebutuhan protein nabati Anda? Simak perbandingan nutrisinya.',
        category: 'Nutrisi & Gizi',
        author: 'Dr. Sarah Gizi',
        date: '25 Mar 2026',
        readTime: '7 min baca',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    }
];

const filteredArticles = computed(() => {
    return articles.filter(article => {
        const query = searchQuery.value.toLowerCase();
        const matchesSearch = article.title.toLowerCase().includes(query) || 
                             article.excerpt.toLowerCase().includes(query);
        const matchesCategory = activeCategory.value === 'Semua' || article.category === activeCategory.value;
        return matchesSearch && matchesCategory;
    });
});
</script>

<template>
    <Head title="Artikel & Edukasi Gizi" />

    <GuestLayout>
        <div class="flex flex-1 flex-col p-6 lg:p-10 bg-white min-h-screen">
            <!-- Header section -->
            <div class="max-w-[1400px] mx-auto w-full text-center space-y-4 mb-12">
                <h1 class="text-3xl font-extrabold text-zinc-900">Artikel & Edukasi Gizi</h1>
                <p class="text-zinc-500 font-medium">Pelajari pola makan sehat dan gaya hidup seimbang.</p>
                
                <!-- Search and Filters -->
                <div class="max-w-2xl mx-auto space-y-6 pt-4">
                    <div class="relative group">
                        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-green-500 transition-colors" />
                        <Input 
                            v-model="searchQuery" 
                            placeholder="Cari artikel..." 
                            class="pl-12 h-12 bg-white border-zinc-200 rounded-full shadow-sm"
                        />
                    </div>
                    
                    <div class="flex flex-wrap justify-center gap-2">
                        <Button 
                            v-for="cat in categories" 
                            :key="cat"
                            :variant="activeCategory === cat ? 'default' : 'secondary'"
                            class="rounded-full px-6 h-9 text-xs font-bold"
                            :class="activeCategory === cat ? 'bg-[#36d362] hover:bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-zinc-700'"
                            @click="activeCategory = cat"
                        >
                            {{ cat }}
                        </Button>
                    </div>
                </div>
            </div>

            <!-- Articles Grid -->
            <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Link 
                    v-for="article in filteredArticles" 
                    :key="article.id" 
                    :href="`/articles/${article.id}`"
                    class="group"
                >
                    <Card class="h-full overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[24px] bg-white text-zinc-900">
                        <div class="relative aspect-[16/11] overflow-hidden">
                            <img 
                                :src="article.image" 
                                :alt="article.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <!-- Category Badge -->
                            <div class="absolute top-4 left-4">
                                <div class="bg-green-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                    {{ article.category }}
                                </div>
                            </div>
                        </div>
                        
                        <CardContent class="p-8 space-y-4">
                            <div class="flex items-center gap-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                <span>{{ article.date }}</span>
                                <span class="w-1 h-1 rounded-full bg-zinc-200"></span>
                                <span>{{ article.readTime }}</span>
                            </div>
                            <h3 class="font-extrabold text-xl text-zinc-900 leading-snug group-hover:text-[#36d362] transition-colors">
                                {{ article.title }}
                            </h3>
                            <p class="text-[13px] text-gray-500 leading-relaxed line-clamp-2">
                                {{ article.excerpt }}
                            </p>
                            
                            <div class="pt-2">
                                <div class="inline-flex items-center gap-2 text-[#36d362] text-[13px] font-black group-hover:gap-3 transition-all">
                                    Baca Selengkapnya
                                    <ChevronRight class="w-4 h-4" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    </GuestLayout>
</template>

