import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

// Get environment (default = dev)
const env = process.env.ENV || "dev";

// Load correct env file (.env.dev / .env.qa / .env.prod)
dotenv.config({ path: `.env.${env}` });

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    baseURL: process.env.BASE_URL,  // Environment based URL
    trace: "on",
    screenshot: "on",
    video: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});