import { faker } from "@faker-js/faker";

export class UserDataGenerator {
  generateUserData() {
    const userName = faker.person.fullName();
    const email = faker.internet.email();
    const subjectLine = faker.lorem.sentence();
    const message = faker.lorem.paragraph();

    return { userName, email, subjectLine, message };
  }
}
