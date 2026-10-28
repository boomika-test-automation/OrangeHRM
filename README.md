# Playwright Automation Framework

## 1. Setup Instructions

1. Install [Node.js](https://nodejs.org/).
2. Clone the repository and open the project folder.
3. Install dependencies:

   ```bash
   npm install
   npx playwright install
   ```

## 2. Framework Structure

```text
playwright/
├── fixtures/
│   └── employeeFixture.js
├── pages/
│   └── EmployeePage.js
├── tests/
│   ├── employee.json
│   ├── employee.spec.js
│   └── photo.png
├── playwright.config.js
├── package.json
└── README.md
```

- **fixtures/** – Custom Playwright fixtures.
- **pages/** – Page Object Model (POM) methods and locators.
- **tests/** – Test scripts, test data, and upload files.
- **playwright.config.js** – Test configuration and reporting settings.

## 3. How to Run the Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/employee.spec.js
```

View the HTML report:

```bash
npx playwright show-report
```

Generate and view the Allure report:

```bash
npx allure generate allure-results --clean
npx allure open
```

## 4. Dependencies Used

- **@playwright/test** – UI automation and API validation.
- **allure-playwright** – Allure test reporting.
- **allure-commandline** – Generate and open Allure reports.
