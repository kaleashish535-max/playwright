import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { FlashComponent } from "../components/flash.component"
export class SecurePage extends BasePage {
  readonly header: Locator;
  //readonly logoutBtn: Locator;
  readonly flash: FlashComponent;

  constructor(page: Page) {
    super(page);

    this.header = page.getByRole("heading", { level: 2 });
    //this.header = page.getByRole("heading", { name: "Secure Area" });
    //this.logoutBtn = page.getByRole("link", { name: "Logout" });



    this.flash = new FlashComponent(page);
  }

  async verifyLoginSuccess() 
  {
    await expect(this.header).toHaveText("Secure Area");
    await this.flash.expectContains("secure");
    
    
    
  }
}