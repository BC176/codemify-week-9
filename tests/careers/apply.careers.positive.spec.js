import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { CareersPage } from "../../page_objects/CareersPage";
import { UserDataGenerator } from "../../page_objects/UserDataGenerator";
import path from "path";

test.beforeEach("homepage logo is visible", async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto("/");

  await expect(homePage.mainLogo).toBeVisible();
});

test("navigate to the application page", async ({ page }) => {
  const homePage = new HomePage(page);
  const careersPage = new CareersPage(page);
  const list = careersPage.careersListContainer;

  await homePage.careersMenuLink.click();

  await expect(list).toBeVisible();
  await expect(list.getByRole("link")).not.toHaveCount(0);

  await list.getByRole("link").first().click();

  await expect(careersPage.careerApplicationTitle).toBeVisible();
});

test("navigate to the application page and apply", async ({ page }) => {
  const homePage = new HomePage(page);
  const careersPage = new CareersPage(page);
  const generator = new UserDataGenerator();
  const filePath = path.resolve("images/bug_feature.jpg");

  await homePage.careersMenuLink.click();

  await expect(careersPage.careersListContainer.getByRole("link")).not.toHaveCount(0);

  await careersPage.careersListContainer.getByText("Quality Assurance").first().click();

  await expect(careersPage.careerApplicationTitle).toBeVisible();

  /* test will NOT submit per instructions, submit button code is commented out in function - See CareersPage POM */
  await careersPage.fillOutAndSubmitApplication(generator.generateUserData());
  await careersPage.attachResume(filePath);

  /* No submission assertion due to testing only, I would assert for success modals or messages, for example. Application dependent. */
});
