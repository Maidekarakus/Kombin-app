import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./",
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  base: "/",
});