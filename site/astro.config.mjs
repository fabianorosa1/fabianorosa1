// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabianorosa.me',
  base: '/fabianorosa1',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  }
});