<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GuestLayout from '@/layouts/GuestLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
</script>

<template>
    <GuestLayout>
        <Head title="Pengaturan Kata Sandi" />

        <!-- Green Header Section -->
        <div class="bg-[#EAFBF0] py-16 px-8 md:px-20">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-black text-zinc-900 tracking-tight">Keamanan Akun</h1>
                <p class="text-zinc-600 font-medium mt-3">Perbarui kata sandi Anda secara berkala untuk menjaga keamanan data.</p>
            </div>
        </div>

        <div class="max-w-4xl mx-auto w-full px-8 py-12">
            <SettingsLayout>
                <div class="space-y-8 bg-white p-8 rounded-[32px] shadow-sm border border-zinc-100">
                    <Heading
                        variant="small"
                        title="Perbarui Kata Sandi"
                        description="Pastikan akun Anda menggunakan kata sandi yang panjang dan acak agar tetap aman."
                    />

                    <Form
                        v-bind="PasswordController.settingsUpdate.form()"
                        :options="{
                            preserveScroll: true,
                        }"
                        reset-on-success
                        :reset-on-error="[
                            'password',
                            'password_confirmation',
                            'current_password',
                        ]"
                        class="space-y-6"
                        v-slot="{ errors, processing, recentlySuccessful }"
                    >
                        <div class="grid gap-2">
                            <Label for="current_password" class="font-bold">Kata Sandi Saat Ini</Label>
                            <Input
                                id="current_password"
                                name="current_password"
                                type="password"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all"
                                autocomplete="current-password"
                                placeholder="Masukkan kata sandi lama"
                            />
                            <InputError :message="errors.current_password" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="password" class="font-bold">Kata Sandi Baru</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all"
                                autocomplete="new-password"
                                placeholder="Masukkan kata sandi baru"
                            />
                            <InputError :message="errors.password" />
                        </div>

                        <div class="grid gap-2">
                            <Label for="password_confirmation" class="font-bold">Konfirmasi Kata Sandi</Label>
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                class="bg-zinc-50 border-none rounded-xl px-5 py-6 focus:bg-white transition-all"
                                autocomplete="new-password"
                                placeholder="Ulangi kata sandi baru"
                            />
                            <InputError :message="errors.password_confirmation" />
                        </div>

                        <div class="flex items-center gap-4">
                            <Button
                                :disabled="processing"
                                class="bg-[#36d362] hover:bg-green-600 font-bold px-8 py-6 rounded-xl transition-all shadow-md shadow-green-50"
                                >Simpan Kata Sandi</Button
                            >

                            <Transition
                                enter-active-class="transition ease-in-out"
                                enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out"
                                leave-to-class="opacity-0"
                            >
                                <p
                                    v-show="recentlySuccessful"
                                    class="text-sm font-black text-green-600"
                                >
                                    Berhasil disimpan.
                                </p>
                            </Transition>
                        </div>
                    </Form>
                </div>
            </SettingsLayout>
        </div>
    </GuestLayout>
</template>
