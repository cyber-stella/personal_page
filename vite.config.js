import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  publicDir: 'public',
  assetsInclude: ['**/*.glb', '**/*.jpg', '**/*.png', '**/*.webp'],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
