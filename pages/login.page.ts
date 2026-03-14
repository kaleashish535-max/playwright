import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { FlashComponent } from "../components/flash.component";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly flash: FlashComponent;

  constructor(page: Page) {
    super(page);

    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });

    this.flash = new FlashComponent(page);
  }

  async launch() {
    await this.goto("/login");
    //await this.expectUrl(/\/login$/);
    
  }

  // async login(user: string, pass: string) {
  //   await this.fill(this.username, user, "Username");
  //   await this.fill(this.password, pass, "Password");
  //   await this.click(this.loginBtn, "Login");
  // }

  async login(username: string, password: string) {
    await this.healFill("Username", username, [
      () => this.page.getByLabel("Username"),
      () => this.page.locator("#username"),
    ]);

    await this.healFill("Password", password, [
      () => this.page.getByLabel("Password"),
      () => this.page.locator("#password"),
    ]);

    await this.healClick("Login button", [
      () => this.page.getByRole("button", { name: "Login" }),
      () => this.page.locator("button[type='submit']"),
    ]);
  }
}