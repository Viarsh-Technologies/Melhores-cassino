// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://tapbill.in',   // used for absolute URLs, OG tags, sitemap
  output: 'static',             // prerender everything
  trailingSlash: 'never',       // clean URLs (/about instead of /about/)
  prefetch: true,               // add link prefetch for in-view links
  compressHTML: true,           // minify HTML in production

  server: {
    port: 4321,
    host: true,                 // allow LAN / device testing
    open: false,
  },

  vite: {
    plugins: [tailwindcss()],
    css: { devSourcemap: true } // easier CSS debugging in dev
  },
})
