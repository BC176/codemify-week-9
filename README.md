Clone this repo:
git clone <repo-url>
cd <repo-folder>

Upload your changes:
git checkout -b feature/<short-name>
git add .
git commit -m "feat: <what you changed>"
git push -u origin feature/<short-name>

Install Dependencies:
npm install
npx playwright install --with-deps

Config & Environment:
Base URL is set in playwright.config.ts (use.baseURL).
