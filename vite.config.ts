import { svelte } from '@sveltejs/vite-plugin-svelte';
import path, { resolve } from "path";
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            $lib: path.resolve("./src/lib"),
        },
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
            },
        },
    },
})
