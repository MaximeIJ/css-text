import {defineConfig} from 'vite';

export default defineConfig({
  base: '',
  build: {
    minify: true,
    outDir: 'demo-pages',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
      },
      input: {
        demo: './index.html',
      },
    },
  },
});
