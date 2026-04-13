import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://ysskrishna.github.io',
  base: isProd ? '/google-sheets-merge-tools/' : '/',
  build: {
    format: 'file',
  },
});
