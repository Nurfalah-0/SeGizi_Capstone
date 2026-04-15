<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Search, ChevronRight } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/layouts/GuestLayout.vue';

import hidrasiImage from '../../../images/hidrasi.jpg';
import nutrisiImage from '../../../images/nutrisi tulang.jpg';
import tidurImage from '../../../images/tidur.jpg';

const props = defineProps<{
    articles: Array<any>;
}>();

const searchQuery = ref('');
const activeCategory = ref('Semua');

const categories = ['Semua', 'Gaya Hidup Sehat', 'Mitos & Fakta', 'Nutrisi & Gizi', 'Tips & Trik'];

const filteredArticles = computed(() => {
    return props.articles.filter(article => {
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
                                <span>{{ new Date(article.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) }}</span>
                                <span class="w-1 h-1 rounded-full bg-zinc-200"></span>
                                <span>{{ article.read_time }}</span>
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

