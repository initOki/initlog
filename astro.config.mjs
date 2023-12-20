import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from '@astrojs/sitemap';

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), mdx(), sitemap({
    canonicalURL: 'https://initlog.vercel.app'
  }), sentry(), spotlightjs()],
  rendererOptions: {
    styleUrl: false
  },
  renderer: ["@astrojs/renderer-stitches"],
  server: {
    port: 3200
  },
  markdown: {
    drafts: true
  }
});