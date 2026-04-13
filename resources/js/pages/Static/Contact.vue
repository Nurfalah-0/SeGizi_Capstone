<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { Mail, Clock, MapPin } from 'lucide-vue-next';
import GuestLayout from '@/layouts/GuestLayout.vue';
</script>

<template>
    <Head title="Hubungi Kami - NutriFlow" />
    <GuestLayout>
        <div class="max-w-[1000px] mx-auto px-8 py-20 pb-40">
            <h1 class="text-5xl font-black tracking-tight mb-6">Hubungi <span class="text-[#36d362]">Kami</span></h1>
            <p class="text-xl text-zinc-500 font-medium mb-16 max-w-2xl">Punya pertanyaan, keluhan, atau sekadar ingin menyapa tim kami? Hubungi kami melalui beberapa jalur resmi di bawah ini.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Email Contact -->
                <div class="bg-zinc-50 rounded-[32px] p-8 border border-zinc-100 hover:shadow-xl hover:shadow-green-100/50 transition-all">
                    <div class="w-14 h-14 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-6">
                        <Mail class="w-6 h-6" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Email Official</h3>
                    <p class="text-zinc-500 font-medium leading-relaxed mb-6">Tanya jawab cepat terkait akun dan kolaborasi bisnis.</p>
                    <a href="mailto:falahhereg@gmail.com" class="text-[#36d362] font-black uppercase text-sm tracking-widest hover:underline">falahhereg@gmail.com</a>
                </div>

                <!-- Office Contact -->
                <div class="bg-zinc-50 rounded-[32px] p-8 border border-zinc-100 hover:shadow-xl hover:shadow-green-100/50 transition-all">
                    <div class="w-14 h-14 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-6">
                        <MapPin class="w-6 h-6" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Kantor Utama</h3>
                    <p class="text-zinc-500 font-medium leading-relaxed mb-6">Datang dan berbincang langsung dengan nutritionist kami.</p>
                    <span class="text-zinc-800 font-black text-sm uppercase tracking-widest">Probolinggo, Indonesia</span>
                </div>

                <!-- Hours -->
                <div class="bg-zinc-50 rounded-[32px] p-8 border border-zinc-100 hover:shadow-xl hover:shadow-green-100/50 transition-all">
                    <div class="w-14 h-14 bg-[#36d362]/10 text-[#36d362] flex items-center justify-center rounded-2xl mb-6">
                        <Clock class="w-6 h-6" />
                    </div>
                    <h3 class="text-xl font-bold mb-2">Jam Operasional</h3>
                    <p class="text-zinc-500 font-medium leading-relaxed mb-6">Admin kami siap membantu Anda pada jam kerja.</p>
                    <span class="text-zinc-800 font-black text-sm uppercase tracking-widest">Senin-Jum'at, 09:00 - 17:00</span>
                </div>
            </div>

            <!-- Form section could go here -->
            <div class="bg-zinc-900 rounded-[48px] p-12 md:p-16 text-center shadow-2xl shadow-[#36d362]/20">
                <h2 class="text-3xl tracking-tight text-white font-black mb-4">Butuh bantuan mendesak?</h2>
                <p class="text-zinc-400 max-w-xl mx-auto mb-10">Kirim pesan langsung ke email dukungan teknis prioritas kami dan kami akan kembali dalam 1x24 jam.</p>
                <a href="mailto:support@nutriflow.com" class="inline-block px-12 py-5 bg-[#36d362] text-white rounded-2xl font-black text-lg hover:-translate-y-1 transition-transform shadow-lg hover:shadow-green-500/50">Hubungi Mendadak</a>
            </div>
        </div>
    </GuestLayout>
</template>
