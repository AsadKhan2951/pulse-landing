import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Three pages: home, /privacy/ and /cookies/. Each builds to its own index.html,
// so they work on any static host without rewrite rules.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        cookies: resolve(__dirname, 'cookies/index.html'),
      },
    },
  },
});
