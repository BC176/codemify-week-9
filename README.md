What is this test project:
This project uses Playwright with Page Object Models to test the homepage and Careers section of a sample site. It verifies navigation, visible elements, open positions, and the application form. Test data is generated using FakerJS, however the Form is not fully submitted.

Why the Form submission is not tested: 
The Form is not actually submitted to prevent false applicant entries, and avoid potentially being flagged as suspicious or automated traffic (such as a potential DDoS).

Run this test in VS Code:
npx playwright test --ui

To check results using PlayWright UI:

- Playwright interactive window will open
- Click the green arrow next an individual test or at the folder level to run all tests
- Upon completion, each test will have a status icon next to it
- Green check = Passed; Red "X" = Failed; Gray >> symbol = Skipped
- UI console provides an Error screen. Navigate to the error screen and info about which line in which file(s) failed is provided

To run a report of tests:
Upon completion of testing, close out the PlayWright UI test window and in VS Code (or other editor) run command: npx playwright show-report

Upload your changes:
git checkout -b feature/<short-name>
git add .
git commit -m "feat: <what you changed>"
git push -u origin feature/<short-name>

Install Dependencies:
npm install
npx playwright install --with-deps
Node.JS
FakerJS.dev

Config & Environment:
Base URL is set in playwright.config.ts (use.baseURL)
