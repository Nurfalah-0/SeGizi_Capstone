<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, Home, Utensils, Newspaper, Sparkles, Instagram, Facebook, Twitter } from 'lucide-vue-next';
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { 
    Sheet, 
    SheetContent, 
    SheetTrigger,
    SheetFooter
} from '@/components/ui/sheet';

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
        <nav class="flex items-center justify-between px-8 md:px-20 h-[80px] bg-white/95 backdrop-blur-md fixed w-full top-0 z-[100] shadow-sm">
            <!-- Left: Logo -->
            <Link href="/" class="flex items-center gap-1 shrink-0">
                <AppLogoIcon class="h-16 w-auto" />
                <span class="text-[22px] font-black tracking-tight leading-none"><span class="text-[#36d362]">Nutri</span><span class="text-[#ff9d29]">Flow</span></span>
            </Link>

            <!-- Center: Nav Links (desktop) -->
            <div class="hidden md:flex items-center gap-8 text-[15px] font-semibold text-zinc-500 absolute left-1/2 -translate-x-1/2">
                <Link href="/" class="relative py-1 transition-colors" :class="$page.url === '/' ? 'text-[#36d362] font-bold' : 'hover:text-zinc-900'">
                    Beranda
                    <span v-if="$page.url === '/'" class="absolute bottom-0 left-0 w-full h-0.5 bg-[#36d362] rounded-full"></span>
                </Link>
                <Link href="/recipes" class="relative py-1 transition-colors" :class="$page.url.startsWith('/recipes') ? 'text-[#36d362] font-bold' : 'hover:text-zinc-900'">
                    Menu Makanan
                    <span v-if="$page.url.startsWith('/recipes')" class="absolute bottom-0 left-0 w-full h-0.5 bg-[#36d362] rounded-full"></span>
                </Link>
                <Link href="/recommendations" class="relative py-1 transition-colors" :class="$page.url.startsWith('/recommendations') ? 'text-[#36d362] font-bold' : 'hover:text-zinc-900'">
                    Menu Untukmu
                    <span v-if="$page.url.startsWith('/recommendations')" class="absolute bottom-0 left-0 w-full h-0.5 bg-[#36d362] rounded-full"></span>
                </Link>
                <Link href="/articles" class="relative py-1 transition-colors" :class="$page.url.startsWith('/articles') ? 'text-[#36d362] font-bold' : 'hover:text-zinc-900'">
                    Artikel
                    <span v-if="$page.url.startsWith('/articles')" class="absolute bottom-0 left-0 w-full h-0.5 bg-[#36d362] rounded-full"></span>
                </Link>
            </div>

            <!-- Right: Mobile Menu only -->
            <div class="flex items-center gap-3 shrink-0">
                <!-- Mobile Menu -->
                <div class="md:hidden">
                    <Sheet>
                        <SheetTrigger as-child>
                            <button class="p-2 hover:bg-zinc-50 rounded-lg transition-colors">
                                <Menu class="w-6 h-6 text-black" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" class="w-[300px] p-0 border-none bg-white">
                            <div class="p-8 border-b-0 shadow-sm">
                                <Link href="/" class="flex items-center gap-3 text-2xl font-black tracking-tight">
                                    <AppLogoIcon class="h-10 w-auto object-contain" />
                                    <span><span class="text-[#36d362]">Nutri</span><span class="text-[#ff9d29]">Flow</span></span>
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
                                <Link href="/recommendations" class="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-green-50 hover:text-[#36d362] transition-all group" :class="page.url.startsWith('/recommendations') ? 'bg-green-50 text-[#36d362]' : 'text-zinc-600'">
                                    <Sparkles class="w-5 h-5" />
                                    <span class="font-black text-sm uppercase tracking-wider">Menu Untukmu</span>
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
            </div>
        </nav>

        <!-- Page Content -->
        <main class="pt-[80px]">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-zinc-950 text-white pt-24 pb-12 px-8 md:px-20 mt-16 font-sans relative overflow-hidden">
            <!-- Decorative blur background -->
            <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-[#36d362]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            
            <div class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-20 relative z-10 border-b border-zinc-800">
                <div class="space-y-6">
                    <Link href="/" class="inline-flex items-center gap-3 text-3xl font-black tracking-tight">
                        <!-- White rounded badge makes PNG white-bg look intentional on dark footer -->
                        <div class="bg-white rounded-2xl p-2 flex-shrink-0">
                            <AppLogoIcon class="h-12 w-auto" />
                        </div>
                        <span><span class="text-[#36d362]">Nutri</span><span class="text-[#ff9d29]">Flow</span></span>
                    </Link>
                    <p class="text-zinc-400 text-sm leading-relaxed font-medium max-w-[250px]">
                        Makanan untuk hidup, bukan hidup untuk makanan. Solusi gaya hidup sehat masa depan.
                    </p>
                    <div class="flex gap-4 pt-2">
                        <a href="https://instagram.com" target="_blank" class="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:bg-[#36d362] hover:border-[#36d362] transition-all group shadow-xl">
                            <Instagram class="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://facebook.com" target="_blank" class="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:bg-[#36d362] hover:border-[#36d362] transition-all group shadow-xl">
                            <Facebook class="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://twitter.com" target="_blank" class="w-12 h-12 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:bg-[#1da1f2] hover:border-[#1da1f2] transition-all group shadow-xl">
                            <Twitter class="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                <!-- Functional Links -->
                <div>
                    <h4 class="font-semibold text-zinc-100 mb-6 text-[16px]">Navigasi Utama</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-400 font-medium">
                        <li><Link href="/" class="hover:text-white transition-colors">Kalkulator BMI</Link></li>
                        <li><Link href="/recommendations" class="hover:text-white transition-colors">Cek Rencana Makan</Link></li>
                        <li><Link href="/recipes" class="hover:text-white transition-colors">Eksplor Resep</Link></li>
                        <li><Link href="/articles" class="hover:text-white transition-colors">Artikel Kesehatan</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-zinc-100 mb-6 text-[16px]">Kategori Populer</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-400 font-medium">
                        <li><Link href="/recipes" class="hover:text-white transition-colors">Diet Sehat</Link></li>
                        <li><Link href="/recipes" class="hover:text-white transition-colors">Tinggi Protein</Link></li>
                        <li><Link href="/articles" class="hover:text-white transition-colors">Edukasi Gizi</Link></li>
                        <li><Link href="/articles" class="hover:text-white transition-colors">Gaya Hidup Medis</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold text-zinc-100 mb-6 text-[16px]">Bantuan</h4>
                    <ul class="space-y-4 text-[15px] text-zinc-400 font-medium">
                        <li><Link href="/contact" class="hover:text-white transition-colors">Hubungi Kami</Link></li>
                        <li><Link href="/about" class="hover:text-white transition-colors">Tentang Platform</Link></li>
                        <li><Link href="/report-bug" class="hover:text-white transition-colors">Laporkan Bug</Link></li>
                    </ul>
                </div>
            </div>
            
            <div class="max-w-[1400px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] font-medium text-zinc-500 gap-6 relative z-10">
                <!-- Fallback to simple © since vue compilation handles pure string better -->
                <p>&copy; 2026 NutriFlow Platform. Seluruh Hak Cipta Dilindungi.</p>
                <div class="flex gap-8">
                    <Link href="/privacy" class="hover:text-white transition-colors">Kebijakan Privasi</Link>
                    <Link href="/terms" class="hover:text-white transition-colors">Syarat & Ketentuan</Link>
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
