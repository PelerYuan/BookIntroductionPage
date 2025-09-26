import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://peleryuan.github.io',
  base: '/book',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true
      }
    })
  ],
  vite: {
    server: {
      fs: {
        // Exclude large files from being watched
        deny: ['**/pdfs/**']
      }
    }
  }
});


