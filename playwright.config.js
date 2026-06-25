// @ts-check
import { defineConfig, devices } from '@playwright/test';
require("dotenv").config();

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  timeout: 40000,
  expect: {
    timeout: 50000
  },
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});

