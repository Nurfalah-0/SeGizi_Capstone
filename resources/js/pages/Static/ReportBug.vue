<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Bug, ImagePlus } from 'lucide-vue-next';
</script>

<template>
    <Head title="Laporkan Bug - NutriFlow" />
    <GuestLayout>
        <div class="max-w-[700px] mx-auto px-8 py-20 pb-40">
            <div class="w-16 h-16 bg-[#ff9d29]/10 text-[#ff9d29] flex items-center justify-center rounded-2xl mb-8">
                <Bug class="w-8 h-8" />
            </div>
            <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-6">Laporkan <span class="text-[#ff9d29]">Bug / Kesalahan</span></h1>
            <p class="text-xl text-zinc-500 font-medium mb-12">Menemukan sesuatu yang tidak berfungsi semestinya? Beritahu kami agar segera kami perbaiki.</p>
            
            <div class="bg-white rounded-[32px] p-8 md:p-12 border border-zinc-100 shadow-xl shadow-orange-100/30">
                <form class="space-y-6" @submit.prevent>
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-zinc-800">Judul Laporan</label>
                        <input type="text" placeholder="Misal: Kalkulator BMI tidak muncul" class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#ff9d29] focus:ring-1 focus:ring-[#ff9d29] transition-all">
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-zinc-800">Deskripsi Detail</label>
                        <textarea rows="5" placeholder="Jelaskan langkah-langkah untuk mereproduksi bug ini..." class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#ff9d29] focus:ring-1 focus:ring-[#ff9d29] transition-all"></textarea>
                    </div>

                    <div class="space-y-2">
                        <label class="text-sm font-bold text-zinc-800">Halaman Tempat Bug Terjadi</label>
                        <input type="url" placeholder="https://..." class="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-[#ff9d29] focus:ring-1 focus:ring-[#ff9d29] transition-all">
                    </div>
                    
                    <div class="space-y-2">
                        <label class="text-sm font-bold text-zinc-800">Tangkapan Layar (Opsional)</label>
                        <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-200 border-dashed rounded-xl cursor-pointer bg-zinc-50 hover:bg-orange-50/50 hover:border-[#ff9d29] transition-all group">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <ImagePlus class="w-8 h-8 mb-3 text-zinc-400 group-hover:text-[#ff9d29] transition-colors" />
                                <p class="mb-2 text-[13px] text-zinc-500 font-medium"><span class="font-bold text-zinc-700">Klik untuk unggah</span> atau seret gambar ke sini</p>
                                <p class="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">PNG, JPG (Maks. 5MB)</p>
                            </div>
                            <input type="file" class="hidden" accept="image/*" multiple />
                        </label>
                    </div>
                    
                    <button type="submit" class="w-full mt-4 px-8 py-4 bg-zinc-900 text-white rounded-xl font-black text-[15px] hover:-translate-y-1 transition-all shadow-lg shadow-zinc-200">Kirim Laporan</button>
                    <p class="text-xs text-center text-zinc-400 mt-4">* Laporan Anda akan dikaji oleh tim developer dalam kurun waktu cepat.</p>
                </form>
            </div>
        </div>
    </GuestLayout>
</template>
