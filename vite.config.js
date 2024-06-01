import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@arrayUtils': fileURLToPath(new URL('./src/utils/array.js', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/components/icons/index.js', import.meta.url))
    }
  }
})
