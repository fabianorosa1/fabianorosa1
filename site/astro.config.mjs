// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://fabianorosa.me',
  base: '/fabianorosa1',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});