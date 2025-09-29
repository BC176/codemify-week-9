import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto("/");

  await expect(homePage.mainLogo).toBeVisible();
});