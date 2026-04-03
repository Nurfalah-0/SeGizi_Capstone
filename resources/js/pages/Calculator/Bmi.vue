<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Scale, Info, RefreshCcw } from 'lucide-vue-next';
import { triggerLoading } from '@/stores/loading';

const height = ref<number>();
const weight = ref<number>();
const bmiResult = ref<number | null>(null);

const calculateBMI = () => {
    if (height.value && weight.value && height.value > 0 && weight.value > 0) {
        triggerLoading(1500);
        bmiResult.value = null;
        
        setTimeout(() => {
            const h = Number(height.value) / 100;
            const w = Number(weight.value);
            bmiResult.value = w / (h * h);
        }, 1500);
    } else {
        alert("Tolong isi tinggi dan berat badan dengan angka yang valid.");
    }
};

const reset = () => {
    height.value = undefined;
    weight.value = undefined;
    bmiResult.value = null;
};

const bmiCategory = computed(() => {
    if (!bmiResult.value) return null;
    if (bmiResult.value < 18.5) return { label: 'Kurang Berat Badan', description: 'Berat badan Anda di bawah rata-rata. Perbanyak asupan nutrisi seimbang.', color: 'bg-blue-500 text-white' };
    if (bmiResult.value < 25) return { label: 'Berat Badan Ideal', description: 'Sangat baik! Berat badan Anda sudah dalam kategori sehat. Pertahankan!', color: 'bg-[#36d362] text-white' };
    if (bmiResult.value < 30) return { label: 'Kelebihan Berat Badan', description: 'Waspada terhadap asupan kalori Anda. Mulailah rutin berolahraga.', color: 'bg-yellow-500 text-white' };
    return { label: 'Obesitas', description: 'Sangat disarankan untuk mulai pola hidup sehat dan konsultasi dengan ahli gizi.', color: 'bg-red-500 text-white' };
});
</script>

<template>
    <Head title="Kalkulator BMI" />

    <GuestLayout>
        <div class="flex flex-1 flex-col gap-6 p-6 lg:p-20 bg-white min-h-screen">
            <div class="max-w-3xl mx-auto w-full">
                <Card class="border border-zinc-100 shadow-2xl bg-white rounded-[32px] overflow-hidden">
                    <CardHeader class="pb-10 pt-10 px-10">
                        <div class="flex flex-col items-center text-center gap-4">
                            <div class="p-4 bg-[#36d362]/10 rounded-[24px]">
                                <Scale class="w-10 h-10 text-[#36d362]" />
                            </div>
                            <div>
                                <CardTitle class="text-3xl font-black text-zinc-900">Hitung BMI Anda</CardTitle>
                                <CardDescription class="text-zinc-500 font-medium mt-2 max-w-xs">Cek status berat badan ideal Anda secara cepat dan akurat.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent class="grid gap-10 p-10 pt-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-3">
                                <Label for="height" class="text-[12px] font-black text-zinc-400 uppercase tracking-[0.1em] ml-1">Tinggi Badan (cm)</Label>
                                <input 
                                    id="height" 
                                    type="number" 
                                    v-model.number="height" 
                                    placeholder="Contoh: 170" 
                                    class="h-14 w-full px-6 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] text-zinc-900 font-bold shadow-sm transition-all"
                                />
                            </div>
                            <div class="space-y-3">
                                <Label for="weight" class="text-[12px] font-black text-zinc-400 uppercase tracking-[0.1em] ml-1">Berat Badan (kg)</Label>
                                <input 
                                    id="weight" 
                                    type="number" 
                                    v-model.number="weight" 
                                    placeholder="Contoh: 65" 
                                    class="h-14 w-full px-6 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#36d362]/10 focus:border-[#36d362] text-zinc-900 font-bold shadow-sm transition-all"
                                />
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <button @click="calculateBMI" class="flex-1 h-16 bg-[#36d362] hover:bg-green-600 text-white font-black rounded-2xl shadow-xl shadow-green-100 transition-all uppercase tracking-widest text-sm hover:-translate-y-1 active:translate-y-0.5 duration-300">
                                Hitung BMI Sekarang
                            </button>
                            <button @click="reset" class="w-16 h-16 flex items-center justify-center border-2 border-zinc-100 rounded-2xl hover:bg-zinc-50 transition-all text-zinc-300 hover:text-zinc-600">
                                <RefreshCcw class="w-6 h-6" />
                            </button>
                        </div>

                        <Transition
                            enter-active-class="transition duration-500 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                        >
                            <div v-if="bmiResult" class="mt-4 p-10 rounded-[32px] bg-[#EAFBF0] border-4 border-white shadow-xl">
                                <div class="text-center space-y-6">
                                    <p class="text-[11px] font-black text-green-600 uppercase tracking-[0.2em]">Skor BMI Anda</p>
                                    <div class="text-7xl font-black text-zinc-900 tracking-tighter">
                                        {{ bmiResult.toFixed(1) }}
                                    </div>
                                    <div class="flex justify-center">
                                        <Badge class="px-8 py-2.5 text-[14px] font-black rounded-full uppercase shadow-lg shadow-black/5" :class="bmiCategory?.color">
                                            {{ bmiCategory?.label }}
                                        </Badge>
                                    </div>
                                    <p class="text-zinc-600 font-medium leading-relaxed max-w-sm mx-auto">
                                        {{ bmiCategory?.description }}
                                    </p>
                                </div>
                            </div>
                        </Transition>
                    </CardContent>

                    <CardFooter class="bg-zinc-50 border-t border-zinc-100 p-10">
                        <div class="flex gap-5 text-[13px] text-zinc-500 leading-relaxed font-medium">
                            <Info class="w-6 h-6 shrink-0 text-[#36d362]" />
                            <p>Indeks Massa Tubuh (BMI) adalah cara praktis untuk menilai proporsi tubuh. Namun, BMI tidak membedakan antara massa otot dan cadangan lemak secara detail.</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </GuestLayout>
</template>

<style scoped>
</style>


<style scoped>
</style>
