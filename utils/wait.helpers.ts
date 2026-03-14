import { Page } from 'playwright';

export class WaitHelpers {
  static async waitForElement(page: Page, selector: string, timeout = 5000) {
    await page.waitForSelector(selector, { timeout });
  }

  static async waitForURL(page: Page, url: string, timeout = 5000) {
    await page.waitForURL(url, { timeout });
  }
}