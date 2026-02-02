import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],

    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'src/styles'),
                ],
                additionalData: `
                  @use "settings/colors" as *;
                  @use "settings/fonts" as *;
                `,
            },
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@ui': path.resolve(__dirname, 'src/ui'),
        },
    },
})
