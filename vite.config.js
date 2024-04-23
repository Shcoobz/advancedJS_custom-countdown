import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react_custom-countdown/',
  build: {
    outDir: 'build',
  },
});
