import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://jardimcolina.santafe.imb.br',
  output: 'static',

  integrations: [
    sitemap(),
    icon({
      include: {
        tabler: [
          'plane',
          'building-store',
          'map-2',
          'building-skyscraper',
          'road',
          'bulb',
          'droplet',
          'walk',
          'tree',
          'arrow-left',
          'arrow-right',
          'star-filled',
          'brand-google',
          'chevron-down',
          'maximize',
          'trending-up',
          'shield-check',
        ],
      },
    }),
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
