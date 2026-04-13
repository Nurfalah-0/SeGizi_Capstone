<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Search, ChevronRight, Flame, Dumbbell, Clock, ArrowUpDown } from 'lucide-vue-next';
import { ref, computed } from 'vue';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import GuestLayout from '@/layouts/GuestLayout.vue';
import carbonaraImage from '../../../images/carbonara.jpg';
import hidrasiImage from '../../../images/hidrasi.jpg';
import laukImage from '../../../images/lauk.png';

const searchQuery = ref('');
const activeCategory = ref('Semua');
const activeGoal = ref('Semua');
const activeSort = ref('default');

const categories = computed(() => {
    const list = ['Semua', 'Sarapan', 'Makan Siang', 'Makan Malam', 'Cemilan'];
    return list.map(name => ({
        name,
        count: name === 'Semua' 
            ? recipes.length 
            : recipes.filter(r => r.category === name).length
    }));
});

const goals = computed(() => {
    const list = ['Semua', 'Diet', 'Bulking'];
    return list.map(name => ({
        name,
        count: name === 'Semua'
            ? recipes.length
            : recipes.filter(r => r.goal === name).length
    }));
});

const sortOptions = [
    { key: 'default',       label: 'Terbaru',              icon: ArrowUpDown },
    { key: 'calorie-asc',   label: 'Kalori Terendah',      icon: Flame },
    { key: 'calorie-desc',  label: 'Kalori Tertinggi',     icon: Flame },
    { key: 'protein-desc',  label: 'Protein Tertinggi',    icon: Dumbbell },
    { key: 'time-asc',      label: 'Masak Tercepat',       icon: Clock },
];

const recipes = [
    {
        id: 1,
        title: 'Pasta Carbonara Sehat',
        category: 'Tinggi Protein',
        goal: 'Diet',
        image: carbonaraImage,
        description: 'Nikmati pasta lezat yang telah dimodifikasi agar kaya protein dan lebih sehat untuk diet Anda.',
        calories: 420,
        protein: 35,
        cookTime: 20,
    },
    {
        id: 2,
        title: 'Nasi Campur Sayur',
        category: 'Rendah Kalori',
        goal: 'Diet',
        image: laukImage,
        description: 'Kombinasi nasi dan beraneka lauk pauk bergizi seimbang untuk hidangan keluarga.',
        calories: 310,
        protein: 28,
        cookTime: 15,
    },
    {
        id: 3,
        title: 'Jus Detoks Hidrasi',
        category: 'Tinggi Serat',
        goal: 'Diet',
        image: hidrasiImage,
        description: 'Minuman pelepas dahaga yang kaya serat dan baik untuk melancarkan pencernaan harian.',
        calories: 120,
        protein: 2,
        cookTime: 5,
    },
    {
        id: 4,
        title: 'Pecel Sayur Madiun',
        category: 'Makan Siang',
        goal: 'Diet',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
        description: 'Pecel sayur khas Madiun dengan bumbu kacang gurih dan sayuran segar pilihan, rendah kalori namun mengenyangkan.',
        calories: 320,
        protein: 8,
        cookTime: 30,
    },
    {
        id: 5,
        title: 'Dada Ayam Bakar Madu',
        category: 'Makan Siang',
        goal: 'Bulking',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&auto=format&fit=crop',
        description: 'Dada ayam empuk dengan olesan madu dan rempah, tinggi protein untuk pertumbuhan otot maksimal.',
        calories: 680,
        protein: 45,
        cookTime: 35,
    },
    {
        id: 6,
        title: 'Smoothie Bowl Berry',
        category: 'Cemilan',
        goal: 'Diet',
        image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&auto=format&fit=crop',
        description: 'Cemilan segar kaya antioksidan dengan topping granola dan buah beri segar.',
        calories: 250,
        protein: 10,
        cookTime: 10,
    },
];

const processedRecipes = computed(() => {
    // Step 1: Filter by category, goal, and search
    let result = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = activeCategory.value === 'Semua' || recipe.category === activeCategory.value;
        const matchesGoal = activeGoal.value === 'Semua' || recipe.goal === activeGoal.value;
        return matchesSearch && matchesCategory && matchesGoal;
    });

    // Step 2: Sort based on activeSort
    switch (activeSort.value) {
        case 'calorie-asc':
            result = [...result].sort((a, b) => a.calories - b.calories);
            break;
        case 'calorie-desc':
            result = [...result].sort((a, b) => b.calories - a.calories);
            break;
        case 'protein-desc':
            result = [...result].sort((a, b) => b.protein - a.protein);
            break;
        case 'time-asc':
            result = [...result].sort((a, b) => a.cookTime - b.cookTime);
            break;
        default:
            break;
    }

    return result;
});
</script>

<template>
    <Head title="Menu Makanan Sehat" />

    <GuestLayout>
        <div class="flex flex-1 flex-col p-6 lg:p-10 bg-white min-h-screen">
            <!-- Header Section -->
            <div class="max-w-[1400px] mx-auto w-full space-y-4 mb-12">
                <h1 class="text-3xl font-extrabold text-zinc-900 leading-tight">
                    Temukan Menu Makanan <br> Sehat Pilihanmu
                </h1>
                <p class="text-zinc-500 font-medium max-w-lg">
                    Berbagai resep sehat, lezat, dan sesuai kebutuhan nutrisi harianmu
                </p>
            </div>

            <div class="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row gap-10">
                <!-- Sidebar -->
                <aside class="w-full lg:w-[280px] shrink-0 space-y-6">
                    <!-- Kategori -->
                    <div class="overflow-hidden border border-gray-100 rounded-[20px] shadow-sm">
                        <div class="bg-[#36d362] px-6 py-4">
                            <h2 class="text-white font-bold text-lg">Kategori Menu</h2>
                        </div>
                        <div class="bg-white">
                            <button
                                v-for="cat in categories"
                                :key="cat.name"
                                @click="activeCategory = cat.name"
                                class="w-full flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                                :class="{ 'text-[#36d362] font-bold': activeCategory === cat.name }"
                            >
                                <span class="text-sm font-medium">{{ cat.name }}</span>
                                <span class="flex items-center justify-center min-w-[24px] h-6 px-2 text-[10px] bg-white border border-gray-200 rounded-full text-zinc-500 shadow-sm">
                                    {{ cat.count }}
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- Tujuan Nutrisi -->
                    <div class="overflow-hidden border border-gray-100 rounded-[20px] shadow-sm">
                        <div class="bg-[#36d362] px-6 py-4">
                            <h2 class="text-white font-bold text-lg">Tujuan Nutrisi</h2>
                        </div>
                        <div class="bg-white">
                            <button
                                v-for="goal in goals"
                                :key="goal.name"
                                @click="activeGoal = goal.name"
                                class="w-full flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                                :class="{ 'text-[#36d362] font-bold': activeGoal === goal.name }"
                            >
                                <span class="text-sm font-medium">{{ goal.name }}</span>
                                <span class="flex items-center justify-center min-w-[24px] h-6 px-2 text-[10px] bg-white border border-gray-200 rounded-full text-zinc-500 shadow-sm">
                                    {{ goal.count }}
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- Sort Box -->
                    <div class="overflow-hidden border border-gray-100 rounded-[20px] shadow-sm">
                        <div class="bg-zinc-900 px-6 py-4 flex items-center gap-2">
                            <ArrowUpDown class="w-4 h-4 text-white" />
                            <h2 class="text-white font-bold text-lg">Urutkan</h2>
                        </div>
                        <div class="bg-white">
                            <button
                                v-for="sort in sortOptions"
                                :key="sort.key"
                                @click="activeSort = sort.key"
                                class="w-full flex items-center gap-3 px-6 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                                :class="{ 'text-[#36d362] font-bold bg-green-50': activeSort === sort.key }"
                            >
                                <component
                                    :is="sort.icon"
                                    class="w-4 h-4 shrink-0"
                                    :class="activeSort === sort.key ? 'text-[#36d362]' : 'text-zinc-400'"
                                />
                                <span class="text-sm font-medium">{{ sort.label }}</span>
                                <span
                                    v-if="activeSort === sort.key"
                                    class="ml-auto w-2 h-2 rounded-full bg-[#36d362]"
                                ></span>
                            </button>
                        </div>
                    </div>
                </aside>

                <!-- Content area -->
                <div class="flex-1 space-y-8">
                    <!-- Search row -->
                    <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div class="relative w-full sm:w-[400px]">
                            <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 font-bold" />
                            <Input
                                v-model="searchQuery"
                                placeholder="Cari menu makanan..."
                                class="pl-12 h-10 bg-white border-zinc-200 rounded-lg shadow-sm"
                            />
                        </div>

                        <!-- Active sort badge -->
                        <div v-if="activeSort !== 'default'" class="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-[13px] font-bold text-[#36d362]">
                            <component :is="sortOptions.find(s => s.key === activeSort)?.icon" class="w-4 h-4" />
                            {{ sortOptions.find(s => s.key === activeSort)?.label }}
                            <button @click="activeSort = 'default'" class="ml-1 text-zinc-400 hover:text-red-500 transition-colors font-black">✕</button>
                        </div>

                        <span class="text-sm text-zinc-400 font-medium hidden sm:block">
                            {{ processedRecipes.length }} resep ditemukan
                        </span>
                    </div>

                    <!-- Empty state -->
                    <div v-if="processedRecipes.length === 0" class="flex flex-col items-center justify-center py-24 text-center gap-4">
                        <div class="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center">
                            <Search class="w-8 h-8 text-zinc-300" />
                        </div>
                        <p class="font-bold text-zinc-400">Tidak ada resep yang ditemukan.</p>
                        <button @click="searchQuery = ''; activeCategory = 'Semua'; activeGoal = 'Semua'; activeSort = 'default';" class="text-sm text-[#36d362] font-bold hover:underline">Reset Filter</button>
                    </div>

                    <!-- Grid -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link
                            v-for="recipe in processedRecipes"
                            :key="recipe.id"
                            :href="`/recipes/${recipe.id}`"
                            class="group"
                        >
                            <Card class="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-[24px] bg-white text-zinc-900 h-full">
                                <div class="relative aspect-[16/11] overflow-hidden">
                                    <img
                                        :src="recipe.image"
                                        :alt="recipe.title"
                                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div class="absolute top-4 left-4">
                                        <div class="bg-green-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                                            {{ recipe.category }}
                                        </div>
                                    </div>
                                </div>
                                <CardContent class="p-8 space-y-4">
                                    <h3 class="font-extrabold text-lg text-zinc-900 leading-snug">
                                        {{ recipe.title }}
                                    </h3>
                                    <p class="text-[13px] text-gray-500 leading-relaxed font-medium line-clamp-2">
                                        {{ recipe.description }}
                                    </p>

                                    <!-- Nutrition badges -->
                                    <div class="flex flex-wrap gap-2">
                                        <span class="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-[11px] font-bold px-3 py-1 rounded-full">
                                            <Flame class="w-3 h-3" />
                                            {{ recipe.calories }} kkal
                                        </span>
                                        <span class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-[11px] font-bold px-3 py-1 rounded-full">
                                            <Dumbbell class="w-3 h-3" />
                                            {{ recipe.protein }}g protein
                                        </span>
                                        <span class="inline-flex items-center gap-1.5 bg-zinc-100 text-zinc-600 text-[11px] font-bold px-3 py-1 rounded-full">
                                            <Clock class="w-3 h-3" />
                                            {{ recipe.cookTime }} menit
                                        </span>
                                    </div>

                                    <div class="pt-2">
                                        <div class="inline-flex items-center gap-2 bg-[#36d362] text-white px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-green-500 transition-colors">
                                            Lihat Resep
                                            <ChevronRight class="w-4 h-4" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
