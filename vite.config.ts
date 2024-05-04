import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte({
      include: '**/*.svelte',
      exclude: 'node_modules/**',
    }),
    react({
      
    })
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src')
    }
  }
})
