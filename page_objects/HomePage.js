export class HomePage {
  constructor(page) {
    this.page = page;
    this.mainLogo = page.getByRole(image, {name: 'NISA-logo'});
    this.careersMenuLink = page.getByRole("link", { name: "Careers" });
  }
}