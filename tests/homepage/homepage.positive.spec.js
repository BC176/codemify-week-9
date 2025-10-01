import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";

test("homepage nav-bar & logo are visible", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");

  await expect(homePage.mainLogo).toBeVisible();
  await expect(homePage.navigationBar).toBeVisible();
});
