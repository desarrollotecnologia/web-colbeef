import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GoDaddy / dominio raíz → '/'
// GitHub Pages → '/web-colbeef/' (se pasa con VITE_BASE_PATH en ese workflow)
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
})
