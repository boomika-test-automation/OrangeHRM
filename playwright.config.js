// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  timeout: 90000,         
  expect: { timeout: 15000 }, 
   reporter: [
    ['list'],

    // HTML Report
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],

    // Allure Report
    ['allure-playwright', {
      resultsDir: 'allure-results',
    }],
  ],

  use: {
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        deviceScaleFactor: undefined,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});