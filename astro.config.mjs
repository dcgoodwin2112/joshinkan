import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.raleighaikido.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
});
