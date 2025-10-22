import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  integrations: [vue()],
  output: 'static',
  site: 'https://partnerships-for-change.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
