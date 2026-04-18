<script setup lang="ts">
import { Head, router, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { 
    Plus,
    Pencil,
    Trash2,
    Search,
    Star,
    Image as ImageIcon,
    Clock,
    User,
    X,
    LayoutDashboard,
    Zap,
    Newspaper,
    Utensils,
    ChevronRight,
    Settings,
    LayoutGrid
} from 'lucide-vue-next';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const props = defineProps<{
    articles: Array<any>;
    recipes: Array<any>;
}>();

const page = usePage();
const breadcrumbs = [
    { title: 'Admin', href: '#' },
    { title: 'Dashboard', href: '/dashboardadmin' },
];

const activeTab = ref('articles');
const showModal = ref(false);
const editingItem = ref<any>(null);

// Form handling
const articleForm = useForm({
    title: '', excerpt: '', category: '', author: '', read_time: '', image: '', content: '',
});

const recipeForm = useForm({
    title: '', category: '', goal: '', calories: 0, protein: 0, cook_time: 0, image: '', description: '',
});

const openCreateModal = () => {
    editingItem.value = null;
    articleForm.reset();
    recipeForm.reset();
    showModal.value = true;
};

const openEditModal = (item: any) => {
    editingItem.value = item;
    if (activeTab.value === 'articles') {
        const itemCopy = { ...item };
        if (itemCopy.content && typeof itemCopy.content === 'object') {
            itemCopy.content = JSON.stringify(itemCopy.content, null, 2);
        }
        Object.assign(articleForm, itemCopy);
    } else {
        Object.assign(recipeForm, item);
    }
    showModal.value = true;
};

const submitForm = () => {
    const url = activeTab.value === 'articles' 
        ? (editingItem.value ? `/admin/articles/${editingItem.value.id}` : '/admin/articles')
        : (editingItem.value ? `/admin/recipes/${editingItem.value.id}` : '/admin/recipes');

    const form = activeTab.value === 'articles' ? articleForm : recipeForm;

    form.post(url, {
        onSuccess: () => { showModal.value = false; },
        preserveScroll: true,
    });
};

const deleteItem = (id: number) => {
    if (confirm('Hapus konten ini secara permanen?')) {
        const type = activeTab.value === 'articles' ? 'articles' : 'recipes';
        router.delete(`/admin/${type}/${id}`, { preserveScroll: true });
    }
};

const togglePopular = (id: number) => {
    const type = activeTab.value === 'articles' ? 'articles' : 'recipes';
    router.patch(`/admin/${type}/${id}/toggle-popular`, {}, { preserveScroll: true });
};

const searchQuery = ref('');
const getFilteredData = () => {
    const data = activeTab.value === 'articles' ? props.articles : props.recipes;
    if (!searchQuery.value) return data;
    return data.filter((item: any) => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
};
</script>

<template>
    <Head title="Admin Dashboard - NutriFlow" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex flex-1 flex-col gap-10 p-8 bg-[#fdfdfd] min-h-screen">
            <!-- Welcome Header (Identical to User Dashboard) -->
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div class="space-y-2">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        <Settings class="w-3 h-3 fill-green-600" />
                        Administrator Access
                    </div>
                    <h1 class="text-4xl font-black tracking-tight text-zinc-900 leading-tight">
                        Content Management
                    </h1>
                    <p class="text-zinc-500 font-medium italic">Kelola artikel dan resep untuk tampilan beranda.</p>
                </div>
                
                <div @click="openCreateModal" class="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-zinc-100 cursor-pointer hover:scale-105 transition-all">
                    <div class="flex flex-col items-end px-4 border-r border-zinc-100">
                        <span class="text-[10px] font-black text-zinc-400 uppercase">Konten Aktif</span>
                        <span class="text-sm font-bold text-zinc-900">{{ articles.length + recipes.length }} Entry</span>
                    </div>
                    <div class="p-2 bg-[#36d362] rounded-xl">
                        <Plus class="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <!-- Navigation & Search (Clean Style) -->
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div class="flex bg-white p-2 rounded-[24px] shadow-sm border border-zinc-50">
                    <button 
                        @click="activeTab = 'articles'"
                        :class="[
                            'px-8 py-3 rounded-[18px] text-sm font-black transition-all duration-300 flex items-center gap-2',
                            activeTab === 'articles' ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600'
                        ]"
                    >
                        <Newspaper class="w-4 h-4" />
                        Artikel Aktif
                    </button>
                    <button 
                        @click="activeTab = 'recipes'"
                        :class="[
                            'px-8 py-3 rounded-[18px] text-sm font-black transition-all duration-300 flex items-center gap-2',
                            activeTab === 'recipes' ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-600'
                        ]"
                    >
                        <Utensils class="w-4 h-4" />
                        Daftar Resep
                    </button>
                </div>

                <div class="relative w-full lg:w-96">
                    <Search class="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 font-bold" />
                    <Input 
                        v-model="searchQuery"
                        placeholder="Cari konten..." 
                        class="pl-14 h-14 border-none bg-white rounded-[24px] shadow-sm font-bold focus-visible:ring-1 focus-visible:ring-[#36d362]"
                    />
                </div>
            </div>

            <!-- Grid Items (Mirroring Stat/Recipe Card style) -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                <Card v-for="item in getFilteredData()" :key="item.id" class="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[40px] overflow-hidden bg-white hover:translate-y-[-4px] transition-all duration-300 group">
                    <CardContent class="p-0">
                        <!-- Image Layout -->
                        <div class="relative aspect-[16/10] overflow-hidden">
                            <img :src="item.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            
                            <!-- Badges -->
                            <div class="absolute top-6 left-6">
                                <Badge class="bg-white/95 text-zinc-900 border-none font-black text-[10px] rounded-lg shadow-sm">
                                    {{ item.category }}
                                </Badge>
                            </div>

                            <!-- Popular Toggle (Refined style) -->
                            <button 
                                @click="togglePopular(item.id)"
                                :class="[
                                    'absolute top-6 right-6 p-3 rounded-2xl backdrop-blur-md transition-all',
                                    item.is_popular ? 'bg-[#36d362] text-white shadow-xl' : 'bg-white/80 text-zinc-400 hover:text-zinc-900'
                                ]"
                            >
                                <Star :class="['w-5 h-5', item.is_popular ? 'fill-white' : '']" />
                            </button>
                        </div>

                        <!-- Card Info -->
                        <div class="p-8 space-y-6">
                            <h3 class="font-black text-xl text-zinc-900 tracking-tight leading-snug line-clamp-2 min-h-[56px]">
                                {{ item.title }}
                            </h3>
                            
                            <div class="flex items-center justify-between pt-6 border-t border-zinc-50">
                                <div class="flex items-center gap-2">
                                    <Button @click="openEditModal(item)" variant="ghost" size="icon" class="w-12 h-12 rounded-[18px] text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                                        <Pencil class="w-5 h-5" />
                                    </Button>
                                    <Button @click="deleteItem(item.id)" variant="ghost" size="icon" class="w-12 h-12 rounded-[18px] text-zinc-400 hover:bg-red-50 hover:text-red-500 transition-all">
                                        <Trash2 class="w-5 h-5" />
                                    </Button>
                                </div>

                                <div class="flex flex-col items-end">
                                    <span class="text-[10px] font-black text-zinc-300 uppercase tracking-widest leading-none mb-1">Status</span>
                                    <span v-if="item.is_popular" class="text-xs font-black text-[#36d362] uppercase tracking-tighter">● Populer</span>
                                    <span v-else class="text-xs font-black text-zinc-200 uppercase tracking-tighter">Standar</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Empty State (Matches Progress Analysis style) -->
                <div v-if="getFilteredData().length === 0" class="col-span-full py-20 bg-white rounded-[40px] shadow-sm flex flex-col items-center justify-center text-center space-y-6">
                    <div class="p-6 bg-zinc-50 rounded-full">
                        <Search class="w-12 h-12 text-zinc-100" />
                    </div>
                    <div class="space-y-1">
                        <p class="text-xl font-black text-zinc-900 tracking-tight">Konten Tidak Ditemukan</p>
                        <p class="text-sm font-medium text-zinc-400">Silakan tambahkan data baru atau ubah kata kunci.</p>
                    </div>
                </div>
            </div>
        </div>        <!-- PREMIUM MODAL COMPONENT (State of the Art) -->
        <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div class="absolute inset-0 bg-zinc-950/60 backdrop-blur-xl animate-in fade-in duration-500" @click="showModal = false"></div>
            <Card class="relative w-full max-w-2xl border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-[48px] overflow-hidden bg-white animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">
                <!-- Glossy Header -->
                <CardHeader class="p-10 pb-6 flex flex-row items-center justify-between border-b border-zinc-100/50 bg-gradient-to-b from-zinc-50/50 to-white">
                    <div class="space-y-1">
                        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-600 rounded-full font-black text-[9px] uppercase tracking-[0.2em]">
                            <Zap class="w-3 h-3" />
                            Creative Studio
                        </div>
                        <CardTitle class="text-4xl font-black text-zinc-900 tracking-tight leading-none mt-2">
                            {{ editingItem ? 'Edit' : 'Create' }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500">{{ activeTab === 'articles' ? 'Article' : 'Recipe' }}</span>
                        </CardTitle>
                    </div>
                    <button @click="showModal = false" class="group p-4 bg-zinc-50 hover:bg-zinc-900 rounded-full transition-all duration-300">
                        <X class="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                    </button>
                </CardHeader>

                <CardContent class="p-10 pt-8 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white">
                    <form @submit.prevent="submitForm" class="space-y-8">
                        <template v-if="activeTab === 'articles'">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Judul Artikel</label>
                                    <div class="relative">
                                        <Input v-model="articleForm.title" placeholder="Masukan judul menarik..." class="h-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold px-6 border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                    </div>
                                </div>
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Kategori</label>
                                    <Input v-model="articleForm.category" placeholder="mis: Nutrisi & Gizi" class="h-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold px-6 border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Penulis</label>
                                    <div class="relative">
                                        <User class="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#36d362]" />
                                        <Input v-model="articleForm.author" placeholder="Nama penulis..." class="h-14 pl-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                    </div>
                                </div>
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Waktu Baca</label>
                                    <div class="relative">
                                        <Clock class="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#36d362]" />
                                        <Input v-model="articleForm.read_time" placeholder="mis: 5 min baca" class="h-14 pl-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                    </div>
                                </div>
                            </div>

                            <div class="group space-y-2.5">
                                <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Link Gambar Utama</label>
                                <div class="relative">
                                    <ImageIcon class="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#36d362]" />
                                    <Input v-model="articleForm.image" placeholder="/images/artikel.jpg atau https://..." class="h-14 pl-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                </div>
                            </div>

                            <div class="group space-y-2.5">
                                <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Ringkasan Pendek</label>
                                <textarea v-model="articleForm.excerpt" rows="3" class="w-full !bg-white border-zinc-200 !text-zinc-900 rounded-3xl p-6 text-sm font-bold focus:ring-0 focus:border-[#36d362] outline-none border-2 transition-all placeholder:text-zinc-300" placeholder="Tulis sedikit tentang artikel ini..."></textarea>
                            </div>
                        </template>

                        <template v-else>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Nama Resep</label>
                                    <Input v-model="recipeForm.title" placeholder="Nama masakan..." class="h-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold px-6 border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                </div>
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Kategori</label>
                                    <Input v-model="recipeForm.category" placeholder="mis: Makan Siang" class="h-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold px-6 border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                </div>
                            </div>

                            <div class="flex flex-wrap gap-6 p-6 bg-zinc-50 rounded-[32px] border border-zinc-100">
                                <div class="flex-1 min-w-[120px] group space-y-2.5">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Kalori</label>
                                    <Input type="number" v-model="recipeForm.calories" class="h-12 !bg-white border-zinc-200 !text-zinc-900 rounded-xl font-bold px-4 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all" required />
                                </div>
                                <div class="flex-1 min-w-[120px] group space-y-2.5">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Protein (g)</label>
                                    <Input type="number" v-model="recipeForm.protein" class="h-12 !bg-white border-zinc-200 !text-zinc-900 rounded-xl font-bold px-4 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all" required />
                                </div>
                                <div class="flex-1 min-w-[120px] group space-y-2.5">
                                    <label class="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Waktu (m)</label>
                                    <Input type="number" v-model="recipeForm.cook_time" class="h-12 !bg-white border-zinc-200 !text-zinc-900 rounded-xl font-bold px-4 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all" required />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">Target Menu</label>
                                    <Input v-model="recipeForm.goal" placeholder="Diet / Bulking" class="h-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold px-6 border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                </div>
                                <div class="group space-y-2.5">
                                    <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1">URL Gambar</label>
                                    <div class="relative">
                                        <ImageIcon class="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#36d362]" />
                                        <Input v-model="recipeForm.image" placeholder="Link gambar..." class="h-14 pl-14 !bg-white border-zinc-200 !text-zinc-900 rounded-2xl font-bold border-2 focus-visible:ring-0 focus-visible:border-[#36d362] transition-all placeholder:text-zinc-300" required />
                                    </div>
                                </div>
                            </div>

                            <div class="group space-y-2.5">
                                <label class="text-[11px] font-black text-zinc-400 uppercase tracking-widest px-1 transition-colors group-focus-within:text-[#36d362]">Langkah Persiapan</label>
                                <textarea v-model="recipeForm.description" rows="3" class="w-full !bg-white border-zinc-200 !text-zinc-900 rounded-3xl p-6 text-sm font-bold focus:ring-0 focus:border-[#36d362] outline-none border-2 transition-all placeholder:text-zinc-300" placeholder="Jelaskan cara memasaknya..."></textarea>
                            </div>
                        </template>

                        <div class="pt-6 relative">
                            <Button type="submit" class="w-full h-16 bg-zinc-900 hover:bg-[#36d362] text-white rounded-[24px] font-black text-lg transition-all active:scale-[0.98] shadow-xl shadow-zinc-200 flex items-center justify-center gap-3 overflow-hidden group" :disabled="articleForm.processing || recipeForm.processing">
                                <span class="relative z-10 flex items-center gap-2">
                                    {{ editingItem ? 'Save Changes' : 'Publish Content' }}
                                    <ChevronRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    </AppLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 10px;
}
</style>
