import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap({
    canonicalURL: 'https://initlog.vercel.app'
  })],
  rendererOptions: {
    styleUrl: false
  },
  renderer: ["@astrojs/renderer-stitches"],
  server: { port: 3200 },
  markdown: {
    drafts: true,
  },
  output: 'server',
  adapter: vercel(),
});
