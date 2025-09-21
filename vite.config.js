import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    server: {
        port: 5173,
        open: true,
        host: true
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true
    },
    preview: {
        port: 4173
    }
})