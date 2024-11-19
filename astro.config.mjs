// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from "@astrojs/partytown";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
    site: 'https://rory.bio',
    integrations: [mdx(), sitemap(), tailwind(), partytown()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex, [autoNewTabExternalLinks, {
            domain: 'localhost:4321'
        }]]
    }
});
