import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { CareersPage } from "../../page_objects/CareersPage";

test.beforeEach("homepage logo is visible", async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto("/");
  //commented code to force a commit

  await expect(homePage.mainLogo).toBeVisible();
});

test("navigate to the application page and submit without filling in any fields", async ({ page }) => {
  const homePage = new HomePage(page);
  const careersPage = new CareersPage(page);
  const list = careersPage.careersListContainer;

  await homePage.careersMenuLink.click();

  await expect(list).toBeVisible();
  await expect(list.getByRole("link")).not.toHaveCount(0);

  await list.getByRole("link").first().click();

  await expect(careersPage.careerApplicationTitle).toBeVisible();

  await careersPage.applicationSubmitButton.click();

  await expect(careersPage.applicationName).toBeFocused();
});
