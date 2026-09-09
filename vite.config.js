import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import derivedContent from './scripts/vite-plugin-derived-content.js';

export default defineConfig({
  plugins: [react(), derivedContent()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8788',
        changeOrigin: true
      }
    }
  }
});
