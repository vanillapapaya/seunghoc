import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://seunghoc.github.io',
  integrations: [mdx(), sitemap(), tailwind()],
  devToolbar: {
    enabled: false  // Astro Dev Toolbar 비활성화
  }
});