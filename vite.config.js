import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

export default defineConfig(() => {
  const logger = createLogger();

  return {
    customLogger: logger,
    plugins: [
      react(),
      reactScopedCssPlugin(),
    ],
  };
});
