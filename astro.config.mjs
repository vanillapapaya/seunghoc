import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkImagePath from './src/lib/remark/remarkImagePath.js';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://seunhoc.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
  devToolbar: {
    enabled: false  // Astro Dev Toolbar 비활성화
  },
  markdown: {
    remarkPlugins: [
      remarkImagePath,
      remarkMath  // 수식 구문 인식
    ],
    rehypePlugins: [
      rehypeKatex  // 수식을 HTML로 변환
    ]
  }
});
