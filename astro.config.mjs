// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // GitHub Pages deployment:
  // - Custom domain or https://<user>.github.io/ → leave base commented out
  // - Subpath https://<user>.github.io/<repo>/ → uncomment and set repo name:
  // base: '/hayya-system',

  build: {
    assets: '_assets',
  },
});
