import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['html', 'clover', 'json'],
      include: ['src']
    },
    mockReset: true,
    include: ['./src/**/*.{test,spec}.{ts,tsx}'],
    setupFiles: ['dotenv/config']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
