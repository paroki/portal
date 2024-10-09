import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./tests/helper/setup.ts"],
    include: ["./src/**/*.spec.ts", "./tests/**/*.spec.ts"],
    exclude: [],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "clover"],
      include: ["src"],
    },
    hookTimeout: 20000,
    testTimeout: 20000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
