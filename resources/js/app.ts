import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import '../css/app.css';
import { initializeTheme } from '@/composables/useAppearance';
import { globalLoading } from '@/stores/loading';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
    progress: false, // Matikan progress bar bawaan inertia
});

// Hook global loading ke setiap navigasi Inertia
router.on('start', () => {
    globalLoading.value = true;
});

router.on('finish', () => {
    globalLoading.value = false;
});

router.on('error', () => {
    globalLoading.value = false;
});

// This will set light / dark mode on page load...
initializeTheme();
