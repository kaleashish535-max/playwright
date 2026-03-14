import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";
import { loadJsonWithEnv } from "../utils/data.loader";

type LoginData = {
  loginTests: Array<{
    title: string;
    tags: string[];
    username: string;
    password: string;
    expected: { type: "success" | "error"; contains: string };
  }>;
};

const data = loadJsonWithEnv<LoginData>("data/login.testdata.json");


test.describe("CaseStudy-4: Data-Driven POM + Component + Tags", () => {
  for (const tc of data.loginTests) {
    const testName = `${tc.tags.join(" ")} ${tc.title}`;

    test(testName, async ({ page }) => {
      const login = new LoginPage(page);
      const secure = new SecurePage(page);

      await login.launch();
      await login.login(tc.username, tc.password);

      if (tc.expected.type === "success") {
        await secure.verifyLoginSuccess();
      } else {
        await login.flash.expectContains(tc.expected.contains);
        
      }
    });
  }
});