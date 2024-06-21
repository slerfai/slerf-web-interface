import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: 'localhost',
    hmr: true,
  },
  build: {
    rollupOptions: {
      // Exclude static assets from the public directory to prevent errors during build process
      external: [
        '/fonts/Cherl.ttf',
        '/fonts/Cherl2.ttf',
        '/images/t.svg',
        '/images/x.svg',
        '/images/slerf.png',
        '/images/coin.png',
        '/images/telegram.svg',
        '/images/okx.png',
        '/images/language.svg',
        '/images/twitter.svg',
        '/images/discord.svg',
        // Add more static asset paths as needed for the project
      ]
    }
  }
})
