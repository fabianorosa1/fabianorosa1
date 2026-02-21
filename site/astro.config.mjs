// @ts-check
import tailwindcss from '@tailwindcss/vite'; // v4 Vite plugin
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabianorosa.me',
  base: '/',  
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
