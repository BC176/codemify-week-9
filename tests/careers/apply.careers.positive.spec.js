import { test, expect } from "@playwright/test";
import { HomePage } from "../../page_objects/HomePage";
import { CareersPage } from "../../page_objects/CareersPage";
import { faker } from "@faker-js/faker";
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
  const list = careersPage.careersListContainer;
  const fakeFullName = faker.person.fullName();
  const fakeEmail = faker.internet.email();
  const fakeSubjectLine = faker.lorem.lines(1);
  const fakeMessage = faker.lorem.paragraph();
  const filePath = path.resolve(
    'C:Users/couch/OneDrive/Desktop/Codemify/codemify-week-9images/bug_feature.JPG'
  );

  await homePage.careersMenuLink.click();

  await expect(list).toBeVisible();
  await expect(list.getByRole("link")).not.toHaveCount(0);

  await list.getByRole("link").first().click();

  await expect(careersPage.careerApplicationTitle).toBeVisible();

  // test will NOT submit, submit button code is commented out in function - See CareersPage POM
  await careersPage.fillOutAndSubmitApplication({
    name: fakeFullName,
    email: fakeEmail,
    subject: fakeSubjectLine,
    message: fakeMessage,
  });

  await careersPage.applicationUploadResume.click();
  await careersPage.attachResume(filePath);
});
