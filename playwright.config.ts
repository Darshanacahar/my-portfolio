import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  // Add your custom playwright configuration overrides here
  // Example:
  // timeout: 60000,
  // use: {
  //   baseURL: 'http://localhost:3000',
  // },
});
