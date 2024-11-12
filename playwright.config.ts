import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration file.
 * 
 * @file This configuration file sets up the Playwright testing environment.
 * 
 * @property {number} timeout - The maximum time (in milliseconds) a test can run before timing out.
 * @property {number} retries - The number of times to retry a failed test.
 * @property {Array} reporter - An array of reporters to use for test results.
 * @property {Array} projects - An array of project configurations.
 * 
 * @project API Tests
 * @property {string} name - The name of the project.
 * @property {string} testDir - The directory containing the API tests.
 * 
 * @project Web Tests
 * @property {string} name - The name of the project.
 * @property {string} testDir - The directory containing the web tests.
 * @property {Object} use - Configuration options for the web tests.
 * @property {string} use.browserName - The name of the browser to use for the web tests.
 * @property {boolean} use.headless - Whether to run the browser in headless mode.
 * @property {string} use.baseURL - The base URL for the web tests.
 */

export default defineConfig({
  timeout: 30000,
  retries: 2,
  reporter: [
    ['list'], // Para ver el progreso en consola
    ['allure-playwright'], // Genera reportes Allure
  ],
  projects: [
    {
      name: 'API Tests',
      testDir: './tests/api',
    },
    {
      name: 'Web Tests - Chromium',
      testDir: './tests/web',
      use: {
        browserName: 'chromium',
        headless: true,
        baseURL: 'https://home-staging.finkargo.com.co/auth/login',
      },
    },
    {
      name: 'Web Tests - Firefox',
      testDir: './tests/web',
      use: {
        browserName: 'firefox',
        headless: true,
        baseURL: 'https://home-staging.finkargo.com.co/auth/login',
      },
    },
    {
      name: 'Web Tests - WebKit',
      testDir: './tests/web',
      use: {
        browserName: 'webkit',
        headless: true,
        baseURL: 'https://home-staging.finkargo.com.co/auth/login',
      },
    },
  ],
});