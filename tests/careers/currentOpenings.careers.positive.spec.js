import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { CareersPage } from "../../page_objects/CareersPage";

test.beforeEach("homepage logo is visible", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");

  await expect(homePage.mainLogo).toBeVisible();
});

test("verify there is at least one open position", async ({ page }) => {
  const homePage = new HomePage(page);
  const careersPage = new CareersPage(page);
  const list = careersPage.careersListContainer;

  await homePage.careersMenuLink.click();

  await expect(list).toBeVisible();
  await expect(list.getByRole("link")).not.toHaveCount(0);
});
