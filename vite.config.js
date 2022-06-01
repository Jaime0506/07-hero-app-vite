import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/07-hero-app-vite/',
  preview: {
    port: 4000
  },
  
  plugins: [react()]
})
