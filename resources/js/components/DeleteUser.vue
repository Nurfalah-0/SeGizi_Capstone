<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { useTemplateRef } from 'vue';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { destroy } from '@/routes/profile';

const passwordInput = useTemplateRef('passwordInput');

const form = useForm({
    password: '',
});

const deleteUser = () => {
    form.delete(destroy().url, {
        preserveScroll: true,
        onError: () => passwordInput.value?.$el.focus(),
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <div class="space-y-6">
        <Heading
            variant="small"
            title="Hapus Akun"
            description="Hapus akun Anda beserta seluruh data dan aktivitas di dalamnya"
        />
        <div
            class="space-y-4 rounded-[24px] border border-red-200 bg-red-50 p-6"
        >
            <div class="relative space-y-1">
                <p class="font-black text-red-900 text-lg">Peringatan Penting!</p>
                <p class="text-sm text-red-700 font-medium leading-relaxed">
                    Mohon berhati-hati, tindakan ini tidak dapat dibatalkan. Seluruh data kesehatan dan riwayat Anda akan hilang selamanya.
                </p>
            </div>
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="destructive" class="font-bold rounded-xl px-6 py-5 shadow-md shadow-red-100" data-test="delete-user-button"
                        >Hapus Akun Saya</Button
                    >
                </DialogTrigger>
                <DialogContent class="rounded-[32px] border-none shadow-2xl p-8 bg-white overflow-hidden max-w-[500px]">
                    <form
                        @submit.prevent="deleteUser"
                        class="space-y-6"
                    >
                        <DialogHeader class="space-y-4">
                            <DialogTitle class="text-2xl font-black text-black leading-tight"
                                >Apakah Anda yakin ingin menghapus akun?</DialogTitle
                            >
                            <DialogDescription class="text-zinc-500 font-medium leading-relaxed text-sm">
                                Setelah akun dihapus, semua sumber daya dan data Anda akan hilang secara permanen. Masukkan kata sandi akun Anda untuk mengonfirmasi penghapusan permanen.
                            </DialogDescription>
                        </DialogHeader>

                        <div class="grid gap-2 pt-2">
                            <Label for="password" class="font-bold text-black text-sm"
                                >Konfirmasi Kata Sandi</Label
                            >
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                v-model="form.password"
                                ref="passwordInput"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all shadow-sm"
                                placeholder="Masukkan kata sandi Anda"
                            />
                            <InputError :message="form.errors.password" />
                        </div>

                        <DialogFooter class="flex flex-col sm:flex-row gap-3 pt-6">
                            <DialogClose as-child>
                                <Button
                                    variant="ghost"
                                    class="font-bold rounded-xl text-zinc-400 hover:bg-zinc-50 flex-1 py-6"
                                    @click="
                                        () => {
                                            form.clearErrors();
                                            form.reset();
                                        }
                                    "
                                >
                                    Batalkan
                                </Button>
                            </DialogClose>

                            <Button
                                type="submit"
                                variant="destructive"
                                class="font-bold rounded-xl bg-red-600 hover:bg-red-700 flex-1 py-6 shadow-lg shadow-red-100"
                                :disabled="form.processing"
                                data-test="confirm-delete-user-button"
                            >
                                Ya, Hapus Akun
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    </div>
</template>
