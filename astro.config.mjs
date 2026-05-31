import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Build-time stamp for every sitemap entry. Search engines use <lastmod>
// to decide whether to re-crawl. Computed once per build, so a deploy
// updates the timestamp for all routes.
const buildTime = new Date().toISOString();

export default defineConfig({
  site: 'https://www.raleighaikido.com',
  integrations: [
    sitemap({
      serialize(item) {
        return { ...item, lastmod: buildTime };
      },
    }),
  ],
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
});
