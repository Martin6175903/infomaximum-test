import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(path.__dirname, './src'),
      '@assets': path.resolve(path.__dirname, './src/assets'),
      '@components': path.resolve(path.__dirname, './src/components')
    }
  }
});
