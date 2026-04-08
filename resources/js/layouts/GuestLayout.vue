<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';

import { 
    Sheet, 
    SheetContent, 
    SheetTrigger,
    SheetFooter
} from '@/components/ui/sheet';
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, Home, Utensils, Scale, Newspaper, Sparkles, Flame } from 'lucide-vue-next';
import { router } from '@inertiajs/vue3';
import { globalLoading } from '@/stores/loading';

const page = usePage();
</script>

<template>
    <div class="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
        <!-- Global Loading Bar -->
        <div v-if="globalLoading" 
             style="position: fixed; top: 0; left: 0; height: 8px; width: 0; background: #36d362; z-index: 10000000; box-shadow: 0 0 20px rgba(54, 211, 98, 1);"
             class="global-animate-progress">
        </div>
        <!-- Navbar -->
        <nav class="flex items-center justify-between px-8 md:px-20 py-4 bg-white/95 backdrop-blur-md fixed w-full top-0 z-[100] shadow-sm">
            <div class="flex items-center gap-6">
                <!-- Mobile Menu (Sheet) -->
                <div class="md:hidden">
                    <Sheet>
                        <SheetTrigger as-child>
                            <button class="p-2 hover:bg-zinc-50 rounded-lg transition-colors">
                                <Menu class="w-6 h-6 text-black" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" class="w-[300px] p-0 border-none bg-white">
                            <div class="p-8 border-b-0 shadow-sm">
                                <Link href="/" class="text-2xl font-black tracking-tight">
                                    <span class="text-[#36d362]">Se</span><span class="text-[#ff9d29]">Gizi</span>
                                </Link>
                                <p class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2">Nutrisi & Kesehatan</p>
                            </div>
                            
                            <div class="p-4 space-y-2 mt-4">
                                <Link href="/" class="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 hover:text-[#36d362] transition-all group" :class="page.url === '/' ? 'bg-green-50 text-[#36d362]' : 'text-zinc-600'">
                                    <Home class="w-5 h-5" />
                                    <span class="font-black text-sm uppercase tracking-wider">Beranda</span>
                                </Link>
                                <Link href="/recipes" class="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 hover:text-[#36d362] transition-all group" :class="page.url.startsWith('/recipes') ? 'bg-green-50 text-[#36d362]' : 'text-zinc-600'">
                                    <Utensils class="w-5 h-5" />
                                    <span class="font-black text-sm uppercase tracking-wider">Menu Makanan</span>
                                </Link>
                                <Link href="/bmi-calculator" class="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 hover:text-[#36d362] transition-all group" :class="page.url.startsWith('/bmi-calculator') ? 'bg-green-50 text-[#36d362]' : 'text-zinc-600'">
                                    <Scale class="w-5 h-5" />
                                    <span class="font-black text-sm uppercase tracking-wider">Kalkulator</span>
                                </Link>
                                <Link href="/articles" class="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 hover:text-[#36d362] transition-all group" :class="page.url.startsWith('/articles') ? 'bg-green-50 text-[#36d362]' : 'text-zinc-600'">
                                    <Newspaper class="w-5 h-5" />
                                    <span class="font-black text-sm uppercase tracking-wider">Artikel</span>
                                </Link>
                                
                            </div>

                            <SheetFooter class="absolute bottom-0 left-0 w-full p-8 bg-zinc-50/50">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-full bg-[#36d362]/10 flex items-center justify-center text-[#36d362] font-black">S</div>
                                    <div>
                                        <p class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Status Pelayanan</p>
                                        <p class="text-xs font-black text-zinc-600">Online & Stabil</p>
                                    </div>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>

                <!-- Logo -->
                <Link href="/" class="text-[28px] font-bold tracking-tight">
                    <span class="text-[#36d362]">Se</span><span class="text-[#ff9d29]">Gizi</span>
                </Link>
            </div>

            <!-- Center Links -->
            <div class="hidden md:flex items-center gap-10 text-[15px] font-semibold text-zinc-600">
                <Link href="/" :class="$page.url === '/' ? 'text-[#36d362] font-bold' : 'hover:text-[#36d362] transition'">Beranda</Link>
                <Link href="/recipes" :class="$page.url.startsWith('/recipes') ? 'text-[#36d362] font-bold' : 'hover:text-[#36d362] transition'">Menu Makanan</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger class="outline-none">
                        <div :class="page.url.includes('-calculator') ? 'text-[#36d362]' : 'text-zinc-600 hover:text-[#36d362] transition'" class="flex items-center gap-1.5 cursor-pointer font-bold py-2">
                            Kalkulator
                            <ChevronDown class="w-4 h-4 opacity-50" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-56 rounded-[24px] shadow-2xl border-none p-3 bg-white animate-in fade-in zoom-in-95 duration-200" align="start" :side-offset="10">
                        <div class="px-3 py-2">
                            <p class="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Pilih Kalkulator</p>
                        </div>
                        <DropdownMenuItem @click="router.visit('/recommendations')" class="rounded-xl px-4 py-3 gap-3 cursor-pointer group focus:bg-yellow-50 transition-all">
                            <div class="p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
                                <Sparkles class="w-4 h-4 text-yellow-600" />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-black text-xs text-zinc-900">Menu Untukmu</span>
                                <span class="text-[10px] text-zinc-400">Rencana makan personal</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="router.visit('/bmi-calculator')" class="rounded-xl px-4 py-3 gap-3 cursor-pointer group focus:bg-green-50 transition-all">
                            <div class="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                <Scale class="w-4 h-4 text-[#36d362]" />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-black text-xs text-zinc-900">Kalkulator BMI</span>
                                <span class="text-[10px] text-zinc-400">Cek status berat badan</span>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="router.visit('/calorie-calculator')" class="rounded-xl px-4 py-3 gap-3 cursor-pointer group focus:bg-orange-50 transition-all">
                            <div class="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                                <Flame class="w-4 h-4 text-orange-600" />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-black text-xs text-zinc-900">Target Kalori</span>
                                <span class="text-[10px] text-zinc-400">Hitung TDEE harian</span>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/articles" :class="$page.url.startsWith('/articles') ? 'text-[#36d362] font-bold' : 'hover:text-[#36d362] transition'">Artikel</Link>
            </div>

            <!-- Empty space to keep center links truly centered -->
            <div class="hidden md:block w-[120px]"></div>
        </nav>

        <!-- Page Content -->
        <main class="pt-[80px]">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-[#f0fff4] pt-20 pb-10 px-8 md:px-20 mt-16 font-sans">
            <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
                <div class="space-y-6">
                    <h2 class="text-3xl font-black text-[#36d362]">SeGizi</h2>
                    <p class="text-gray-600 text-sm leading-relaxed font-medium">
                        Makanan untuk hidup, <br> bukan hidup untuk makanan
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-[#36d362] hover:bg-green-50 transition shadow-sm font-bold text-xs uppercase">IG</a>
                        <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-[#36d362] hover:bg-green-50 transition shadow-sm font-bold text-xs uppercase">FB</a>
                        <a href="#" class="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-[#36d362] hover:bg-green-50 transition shadow-sm font-bold text-xs uppercase">X</a>
                    </div>
                </div>

                <!-- Links -->
                <div>
                    <h4 class="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Navigasi</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-500 font-medium">
                        <li><Link href="/" class="hover:text-[#36d362] transition-colors">Beranda</Link></li>
                        <li><Link href="/recipes" class="hover:text-[#36d362] transition-colors">Menu Makanan</Link></li>
                        <li><Link href="/bmi-calculator" class="hover:text-[#36d362] transition-colors">Kalkulator</Link></li>
                        <li><Link href="/articles" class="hover:text-[#36d362] transition-colors">Artikel</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Kategori</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-500 font-medium">
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Diet</a></li>
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Protein Tinggi</a></li>
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Kalori Rendah</a></li>
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Gizi Edu</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Support</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-500 font-medium">
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Kontak</a></li>
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Legal</a></li>
                        <li><a href="#" class="hover:text-[#36d362] transition-colors">Tentang</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="max-w-[1400px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-zinc-400 gap-4">
                <p>&copy; 2026 SeGizi. Semua Hak Dilindungi.</p>
                <div class="flex gap-8">
                    <a href="#" class="hover:text-zinc-600">Kebijakan Privasi</a>
                    <a href="#" class="hover:text-zinc-600">Syarat & Ketentuan</a>
                </div>
            </div>
        </footer>
    </div>
</template>
 
<style>
@keyframes global-progress {
  0% { width: 0; }
  100% { width: 100%; }
}
.global-animate-progress {
  animation: global-progress 1s ease-in-out forwards;
}
</style>
