import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkImagePath from './src/lib/remark/remarkImagePath.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://seunhoc.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
  devToolbar: {
    enabled: false  // Astro Dev Toolbar 비활성화
  },
  markdown: {
    remarkPlugins: [remarkImagePath],
  }
});
