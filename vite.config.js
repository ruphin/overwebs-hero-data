import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: 'src/overwebs-hero-data.js',
      formats: ['es'],
      fileName: () => 'overwebs-hero-data.js',
    },
  },
});
