import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://dev-admin.gomaterialsinc.com/',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['list'], ['json', { outputFile: 'test-results/report.json' }]],
});
