import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Configuration for GitHub Pages deployment with custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
})
