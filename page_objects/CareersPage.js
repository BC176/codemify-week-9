import path from "path";

export class CareersPage {
  constructor(page) {
    this.page = page;
    this.careersListContainer = page.locator("div.careers-list");
    this.careerApplicationTitle = page.locator("h1.title");
    this.applicationName = page.getByRole("textbox", { name: "Name" });
    this.applicationEmail = page.getByRole("textbox", { name: "Email", exact: true });
    this.applicationSubject = page.getByRole("textbox", { name: "Subject" });
    this.applicationMessage = page.getByRole("textbox", { name: "Message" });
    this.applicationSubmitButton = page.getByRole("button", { name: "Submit" });
  }

  async fillOutAndSubmitApplication({ userName = "", email = "", subjectLine = "", message = "" }) {
    await this.applicationName.fill(userName);
    await this.applicationEmail.fill(email);
    await this.applicationSubject.fill(subjectLine);
    await this.applicationMessage.fill(message);
    /* This next line commented per instructions to NOT submit the application: */
    // await this. applicationSubmitButton. click();
  }

  async attachResume(fileRelPath) {
    const abs = path.resolve(fileRelPath);
    const byLabel = this.page.getByLabel(/upload resume/i);
    const input = (await byLabel.count())
      ? byLabel
      : this.page.locator('input[type="file"]').first();

    await input.setInputFiles(abs);
  }
}
