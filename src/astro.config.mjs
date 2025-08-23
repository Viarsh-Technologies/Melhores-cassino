// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tapbill.in',
  output: 'static',
  trailingSlash: 'never',
  prefetch: true,
  compressHTML: true,

  integrations: [tailwind({
    applyBaseStyles: true, // optional, includes Tailwind’s base styles
  })],

  server: {
    port: 4321,
    host: true,
    open: false,
  },
});