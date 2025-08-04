import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Calculator App',
      short_name: 'Calculator',
      description: 'A simple calculator app built with React and Vite',
      theme_color: '#ffffff',
    },
    workbox: {

    }
  }),
  tailwindcss()
  ],
})
