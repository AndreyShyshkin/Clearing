/* eslint-disable no-undef */

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        office: resolve(__dirname, 'pages/office/index.html'),
        renovation: resolve(__dirname, 'pages/afterRenovation/index.html'),
        FQA: resolve(__dirname, 'pages/FQA/index.html'),
        contactUs: resolve(__dirname, 'pages/contactUs/index.html'),
        calculator: resolve(__dirname, 'pages/calculator/index.html'),
        services: resolve(__dirname, 'pages/services/index.html'),
      },
    },
  },
})
