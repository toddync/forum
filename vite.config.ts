import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
    root,
    plugins: [svelte()],
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                login: resolve(root, 'login', 'index.html'),
            }
        }
    },
    resolve: {
        alias: {
            $lib: resolve(root, "lib"),
        },
    },
})