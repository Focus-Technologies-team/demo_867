import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        rollupOptions: {
          output: {
            // Specify the output directory for CSS
            entryFileNames: '[name].js', // Keep JS files at the root of dist
            chunkFileNames: '[name].js', // Keep chunk files at the root of dist
            assetFileNames: (assetInfo) => {
              if (assetInfo) {
                // Output CSS files directly to dist
                return '[name][extname]';
              }
              // Default behavior for other asset types
              return 'assets/[name].[hash][extname]';
            },
          },
        },
      },
});
