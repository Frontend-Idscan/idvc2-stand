import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: { https: true },
  plugins: [
    copy({
      targets: [
        { src: 'node_modules/@idscan/idvc2/dist/networks/*', dest: 'public/networks' },
      ],
      hook: 'writeBundle',
    }),
    mkcert(),
  ],
});
