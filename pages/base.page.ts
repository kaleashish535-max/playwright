import { expect, type Locator, type Page } from "@playwright/test";
import { healLocator } from "../utils/locator.heal";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path); // uses baseURL
  }

  async expectUrl(regex: RegExp) {
    await expect(this.page).toHaveURL(regex);
  }

  // Auto-healing fill
  async healFill(name: string, value: string, candidates: Array<() => Locator>) {
    const locator = await healLocator(this.page, { name, candidates });
    await expect(locator, `${name} should be visible`).toBeVisible();
    await locator.fill(value);
  }

  // Auto-healing click
  async healClick(name: string, candidates: Array<() => Locator>) {
    const locator = await healLocator(this.page, { name, candidates });
    await expect(locator, `${name} should be visible`).toBeVisible();
    await locator.click();
  }
}