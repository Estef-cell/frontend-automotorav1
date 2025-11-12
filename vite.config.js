import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// configuracion basica de vite
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // esto es para conectar con el backend en spring boot
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
})
