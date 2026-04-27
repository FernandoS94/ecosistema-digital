import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ecosistema-digital/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: 'css/[name][extname]', // ← genera assets/css/index.css con nombre fijo
      }
    }
  },
})