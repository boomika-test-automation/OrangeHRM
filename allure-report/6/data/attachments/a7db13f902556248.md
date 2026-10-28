# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employee.spec.js >> Add employee, update job details, validate API and delete employee
- Location: tests\employee.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Successfully Saved')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Successfully Saved') with timeout 15000ms
  - waiting for getByText('Successfully Saved')
  - Target page, context or browser has been closed

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Harshal Doe
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Sample
- textbox "Middle Name"
- textbox "Last Name": S
- text: Employee Id
- textbox: "0540"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | 
  2   | // pages/EmployeePage.js
  3   | 
  4   | const { expect } = require('@playwright/test');
  5   | 
  6   | const BASE_URL = 'https://opensource-demo.orangehrmlive.com';
  7   | 
  8   | class EmployeePage {
  9   |     constructor(page) {
  10  |         this.page = page;
  11  | 
  12  |         // LOGIN LOCATORS
  13  |         this.username = page.getByPlaceholder('Username');
  14  |         this.password = page.getByPlaceholder('Password');
  15  |         this.loginButton = page.getByRole('button', { name: 'Login' });
  16  |         this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
  17  | 
  18  |         // NAVIGATION LOCATORS
  19  |         this.pimLink = page.getByRole('link', { name: 'PIM' });
  20  |         this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
  21  |         this.employeeListLink = page.getByRole('link', { name: 'Employee List' });
  22  |         this.jobTab = page.getByRole('link', { name: 'Job', exact: true });
  23  | 
  24  |         // ADD EMPLOYEE LOCATORS
  25  |         this.photoInput = page.locator('input[type="file"]');
  26  |         this.firstName = page.getByPlaceholder('First Name');
  27  |         this.lastName = page.getByPlaceholder('Last Name');
  28  |         this.saveButton = page.getByRole('button', { name: 'Save' });
  29  | 
  30  |         // EMPLOYEE LIST LOCATORS
  31  |         this.employeeIdInput = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');
  32  | 
  33  |         this.searchButton = page.getByRole('button', { name: 'Search' });
  34  |         this.successSaved = page.getByText('Successfully Saved');
  35  |         this.successUpdated = page.getByText('Successfully Updated');
  36  | 
  37  |         // JOB DETAILS LOCATORS
  38  |         this.jobTitleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text');
  39  | 
  40  |         this.employmentStatusDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text');
  41  | 
  42  |         this.jobTitleValue = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text-input');
  43  | 
  44  |         this.employmentStatusValue = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text-input');
  45  | 
  46  |         // LOGOUT LOCATORS
  47  |         this.profilePicture = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
  48  |         this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
  49  |     }
  50  | 
  51  |     // 1. OPEN APPLICATION
  52  |     async open() {
  53  |         await this.page.goto(
  54  |             `${BASE_URL}/web/index.php/auth/login`
  55  |         );
  56  |     }
  57  | 
  58  |     // 2. LOGIN
  59  |     async login(username, password) {
  60  |         await this.username.fill(username);
  61  |         await this.password.fill(password);
  62  |         await this.loginButton.click();
  63  | 
  64  |         await expect(this.dashboardHeading).toBeVisible();
  65  |     }
  66  | 
  67  |     // 3. OPEN ADD EMPLOYEE
  68  |     async openAddEmployee() {
  69  |         await this.pimLink.click();
  70  |         await this.addEmployeeLink.click();
  71  |     }
  72  | 
  73  |     // 4. ADD EMPLOYEE
  74  |     async addEmployee(employee) {
  75  |         if (employee.photo) {
  76  |             await this.photoInput.setInputFiles(employee.photo);
  77  |         }
  78  | 
  79  |         await this.firstName.fill(employee.firstName);
  80  |         await this.lastName.fill(employee.lastName);
  81  | 
  82  |         // Preserve leading zeros in the displayed Employee ID.
  83  |         const empId = await this.employeeIdInput.inputValue();
  84  | 
  85  |         await this.saveButton.click();
> 86  |         await expect(this.successSaved).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  87  | 
  88  |         expect(empId).not.toBe('');
  89  | 
  90  |         return empId;
  91  |     }
  92  | 
  93  |     // 5. SEARCH AND OPEN EMPLOYEE
  94  |     async searchEmployee(empId) {
  95  |         await this.employeeListLink.click();
  96  |         await this.employeeIdInput.fill(empId);
  97  |         await this.searchButton.click();
  98  | 
  99  |         const employeeRow = this.page
  100 |             .locator('.oxd-table-card')
  101 |             .filter({
  102 |                 has: this.page.getByText(empId, { exact: true })
  103 |             });
  104 | 
  105 |         await expect(employeeRow).toBeVisible();
  106 |         await employeeRow.click();
  107 |     }
  108 | 
  109 |     // 6. OPEN JOB TAB
  110 |     async openJobTab() {
  111 |         await this.jobTab.click();
  112 |     }
  113 | 
  114 |     // 7. UPDATE JOB DETAILS
  115 |     async updateJobDetails(employee) {
  116 |         await this.jobTitleDropdown.click();
  117 | 
  118 |         await this.page.getByRole('option', {
  119 |             name: employee.jobTitle,
  120 |             exact: true
  121 |         }).click();
  122 | 
  123 |         await this.employmentStatusDropdown.click();
  124 | 
  125 |         await this.page.getByRole('option', {
  126 |             name: employee.employmentStatus,
  127 |             exact: true
  128 |         }).click();
  129 | 
  130 |         await this.saveButton.click();
  131 |         await expect(this.successUpdated).toBeVisible();
  132 |     }
  133 | 
  134 |     // 8. VERIFY JOB DETAILS IN UI
  135 |     async verifyJobDetails(employee) {
  136 |         await expect(this.jobTitleValue)
  137 |             .toHaveText(employee.jobTitle);
  138 | 
  139 |         await expect(this.employmentStatusValue)
  140 |             .toHaveText(employee.employmentStatus);
  141 |     }
  142 | 
  143 |     // 9. API REQUEST HELPER
  144 | 
  145 |     async requestEmployeeAPI(endpoint) {
  146 |         const response = await this.page.request.get(
  147 |             `https://opensource-demo.orangehrmlive.com${endpoint}`,
  148 |             {
  149 |                 headers: {
  150 |                     Accept: 'application/json'
  151 |                 }
  152 |             }
  153 |         );
  154 | 
  155 |         // Validate HTTP status code
  156 |         expect(response.status()).toBe(200);
  157 | 
  158 |         // Read API response
  159 |         const responseText = await response.text();
  160 | 
  161 |         let body;
  162 | 
  163 |         try {
  164 |             body = JSON.parse(responseText);
  165 |         } catch {
  166 |             throw new Error(
  167 |                 `Expected JSON response from ${endpoint}`
  168 |             );
  169 |         }
  170 | 
  171 |         return body;
  172 |     }
  173 | 
  174 | 
  175 |     // 10. VALIDATE EMPLOYEE THROUGH API
  176 |     async validateEmployeeAPI(empId, employee) {
  177 |         console.log(`Validating Employee ID: ${empId}`);
  178 | 
  179 |         // Find employee using the displayed employee ID.
  180 |         const searchResponse = await this.requestEmployeeAPI(
  181 |             `/web/index.php/api/v2/pim/employees?limit=50&offset=0&employeeId=${encodeURIComponent(empId)}`
  182 |         );
  183 | 
  184 |         const employees = searchResponse.data;
  185 | 
  186 |         expect(
```