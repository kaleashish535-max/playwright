import { expect, type Locator, type Page } from "@playwright/test";
import { BaseComponent } from "./base.component";

export class FlashComponent extends BaseComponent {
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    this.message = page.locator("#flash");
    
  }

  async expectContains(text: string) {
    await expect(this.message).toContainText(text);
    
  }

  
}