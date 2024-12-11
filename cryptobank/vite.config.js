import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    rollupOptions: {},
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  swc: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false, // Allow JSX namespaces
          runtime: 'automatic',   // Ensure automatic runtime is used
        },
      },
    },
  },
});
