import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  reporter: [['allure-playwright', { outputFolder: 'allure-results' }]],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on'
  }

});