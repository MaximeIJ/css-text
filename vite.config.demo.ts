import {defineConfig} from 'vite';

export default defineConfig({
  root: '',
  build: {
    minify: true,
    outDir: './demo-pages',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: '[name].js',
      },
      input: ['./index.html'],
    },
  },
});
