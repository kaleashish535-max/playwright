import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../hooks/world';
import { LoginPage } from '../pages/login.page';
import { SecurePage } from '../pages/secure.page';
import 'dotenv/config';

Given('I am on the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.launch();
});

When('I enter valid username and password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
});

When('I enter invalid username or password', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login('invalid', 'invalid');
});

When('I click the login button', async function (this: CustomWorld) {
  // Already handled in login method
});

Then('I should be redirected to the secure area', async function (this: CustomWorld) {
  const securePage = new SecurePage(this.page);
  await securePage.verifyLoginSuccess();
});

Then('I should see a success message', async function (this: CustomWorld) {
  // Handled in verifyLoginSuccess
});

Then('I should see an error message', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.flash.expectContains('invalid');
});