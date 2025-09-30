export class CareersPage {
  constructor(page) {
    this.page = page;
    this.careersListContainer = page.locator("div.careers-list");
    this.careerApplicationTitle = page.locator("h1.title");
    this.applicationName = page.getByRole("textbox", { name: "Name" });
    this.applicationEmail = page.getByRole("textbox", { name: "Email", exact: true });
    this.applicationSubject = page.getByRole("textbox", { name: "Subject" });
    this.applicationMessage = page.getByRole("textbox", { name: "Message" });
    this.applicationUploadResume = page.getByRole("button", { name: "Choose File" });
    this.applicationSubmitButton = page.getByRole("button", { name: "Submit" });
  }

  async fillOutAndSubmitApplication({ name = "", email = "", subject = "", message = "" }) {
    await this.applicationName.fill(name);
    await this.applicationEmail.fill(email);
    await this.applicationSubject.fill(subject);
    await this.applicationMessage.fill(message);
    // await this. applicationSubmitButton. click();
  }

  async attachResume(filePath) {
    const inputByLabel = this.page.getByLabel(/upload resume/i);
    const input = (await inputByLabel.count())
      ? inputByLabel
      : this.page.locator('input[type="file"]').first();

    await input.setInputFiles(filePath);
  }
}
