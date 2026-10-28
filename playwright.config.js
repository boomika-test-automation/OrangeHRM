// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const isCI = !!process.env.CI;

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: false,
  workers: isCI ? 1 : undefined,   
  retries: isCI ? 2 : 0,           
  forbidOnly: isCI,               

  timeout: 120000,                
  expect: { timeout: 15000 },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: isCI,               
    actionTimeout: 15000,         
    navigationTimeout: 60000,

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: isCI
        ? {
            ...devices['Desktop Chrome'],
            viewport: { width: 1920, height: 1080 },
          }
        : {
            // Local: use the real maximized browser window.
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