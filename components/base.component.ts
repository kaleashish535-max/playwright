import { expect, type Locator, type Page } from "@playwright/test";

export class BaseComponent {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async expectVisible(locator: Locator, name = "element") {
    await expect(locator, `${name} should be visible`).toBeVisible();
  }
}