import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/my-site-site',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
