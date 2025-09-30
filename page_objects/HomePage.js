export class HomePage {
  constructor(page) {
    this.page = page;
    this.mainLogo = page.locator('nav.nav-bar img');
    this.navigationBar = page.locator('.nav-bar')
    this.careersMenuLink = page.getByRole("link", { name: "Careers" });
  }
}
