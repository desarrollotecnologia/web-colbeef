import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/web-colbeef/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
}))
