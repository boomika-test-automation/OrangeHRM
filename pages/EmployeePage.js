
// pages/EmployeePage.js

const { expect } = require('@playwright/test');

const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

class EmployeePage {
    constructor(page) {
        this.page = page;

        // LOGIN LOCATORS
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });

        // NAVIGATION LOCATORS
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeLink = page.getByRole('link', { name: 'Add Employee' });
        this.employeeListLink = page.getByRole('link', { name: 'Employee List' });
        this.jobTab = page.getByRole('link', { name: 'Job', exact: true });

        // ADD EMPLOYEE LOCATORS
        this.photoInput = page.locator('input[type="file"]');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });

        // EMPLOYEE LIST LOCATORS
        this.employeeIdInput = page.locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input');

        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.successSaved = page.getByText('Successfully Saved');
        this.successUpdated = page.getByText('Successfully Updated');

        // JOB DETAILS LOCATORS
        this.jobTitleDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text');

        this.employmentStatusDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text');

        this.jobTitleValue = page.locator('.oxd-input-group').filter({ hasText: 'Job Title' }).locator('.oxd-select-text-input');

        this.employmentStatusValue = page.locator('.oxd-input-group').filter({ hasText: 'Employment Status' }).locator('.oxd-select-text-input');

        // LOGOUT LOCATORS
        this.profilePicture = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
    }

    // 1. OPEN APPLICATION
    async open() {
        await this.page.goto(
            `${BASE_URL}/web/index.php/auth/login`
        );
    }

    // 2. LOGIN
    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        await expect(this.dashboardHeading).toBeVisible();
    }

    // 3. OPEN ADD EMPLOYEE
    async openAddEmployee() {
        await this.pimLink.click();
        await this.addEmployeeLink.click();
    }

    // 4. ADD EMPLOYEE
    async addEmployee(employee) {
        if (employee.photo) {
            await this.photoInput.setInputFiles(employee.photo);
        }

        await this.firstName.fill(employee.firstName);
        await this.lastName.fill(employee.lastName);

        // Preserve leading zeros in the displayed Employee ID.
        const empId = await this.employeeIdInput.inputValue();

        await this.saveButton.click();
        await expect(this.successSaved).toBeVisible();

        expect(empId).not.toBe('');

        return empId;
    }

    // 5. SEARCH AND OPEN EMPLOYEE
    async searchEmployee(empId) {
        await this.employeeListLink.click();
        await this.employeeIdInput.fill(empId);
        await this.searchButton.click();

        const employeeRow = this.page
            .locator('.oxd-table-card')
            .filter({
                has: this.page.getByText(empId, { exact: true })
            });

        await expect(employeeRow).toBeVisible();
        await employeeRow.click();
    }

    // 6. OPEN JOB TAB
    async openJobTab() {
        await this.jobTab.click();
    }

    // 7. UPDATE JOB DETAILS
    async updateJobDetails(employee) {
        await this.jobTitleDropdown.click();

        await this.page.getByRole('option', {
            name: employee.jobTitle,
            exact: true
        }).click();

        await this.employmentStatusDropdown.click();

        await this.page.getByRole('option', {
            name: employee.employmentStatus,
            exact: true
        }).click();

        await this.saveButton.click();
        await expect(this.successUpdated).toBeVisible();
    }

    // 8. VERIFY JOB DETAILS IN UI
    async verifyJobDetails(employee) {
        await expect(this.jobTitleValue)
            .toHaveText(employee.jobTitle);

        await expect(this.employmentStatusValue)
            .toHaveText(employee.employmentStatus);
    }

    // 9. API REQUEST HELPER

    async requestEmployeeAPI(endpoint) {
        const response = await this.page.request.get(
            `https://opensource-demo.orangehrmlive.com${endpoint}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        // Validate HTTP status code
        expect(response.status()).toBe(200);

        // Read API response
        const responseText = await response.text();

        let body;

        try {
            body = JSON.parse(responseText);
        } catch {
            throw new Error(
                `Expected JSON response from ${endpoint}`
            );
        }

        return body;
    }


    // 10. VALIDATE EMPLOYEE THROUGH API
    async validateEmployeeAPI(empId, employee) {
        console.log(`Validating Employee ID: ${empId}`);

        // Find employee using the displayed employee ID.
        const searchResponse = await this.requestEmployeeAPI(
            `/web/index.php/api/v2/pim/employees?limit=50&offset=0&employeeId=${encodeURIComponent(empId)}`
        );

        const employees = searchResponse.data;

        expect(
            Array.isArray(employees),
            'Employee search API should return an array'
        ).toBeTruthy();

        const apiEmployee = employees.find(
            item => String(item.employeeId) === String(empId)
        );

        expect(
            apiEmployee,
            `Employee ${empId} should exist in the API`
        ).toBeTruthy();

        // Validate employee identity.
        expect(apiEmployee.firstName).toBe(employee.firstName);
        expect(apiEmployee.lastName).toBe(employee.lastName);

        // Use internal employee number for the details endpoint.
        const internalEmpNumber = apiEmployee.empNumber;

        expect(internalEmpNumber).toBeTruthy();

        console.log(`Employee ID: ${apiEmployee.employeeId}`);
        // console.log(`Internal Employee Number: ${internalEmpNumber}`);

        // Fetch detailed employee record.
        const detailsResponse = await this.requestEmployeeAPI(
            `/web/index.php/api/v2/pim/employees/${encodeURIComponent(internalEmpNumber)}?model=detailed`
        );

        const apiDetails = detailsResponse.data;

        expect(apiDetails).toBeTruthy();
        expect(apiDetails.firstName).toBe(employee.firstName);
        expect(apiDetails.lastName).toBe(employee.lastName);

        // Fetch job details.
        const jobResponse = await this.requestEmployeeAPI(
            `/web/index.php/api/v2/pim/employees/${encodeURIComponent(internalEmpNumber)}/job-details`
        );

        // Print the real response before mapping fields.
        // console.log(
        //     'Job Details API Response:',
        //     JSON.stringify(jobResponse, null, 2)
        // );

        const apiJob = Array.isArray(jobResponse.data)
            ? jobResponse.data[0]
            : jobResponse.data;

        expect(
            apiJob,
            'Job details should exist in the API response'
        ).toBeTruthy();

        // Read values without assuming dropdowns always use strings.
        const readLabel = value => {
            if (typeof value === 'string' || typeof value === 'number') {
                return String(value);
            }

            if (value && typeof value === 'object') {
                return (
                    value.title ??
                    value.name ??
                    value.label ??
                    value.value ??
                    null
                );
            }

            return null;
        };

        const actualJobTitle = readLabel(apiJob.jobTitle);

        const statusField =
            apiJob.employmentStatus ??
            apiJob.empStatus ??
            apiJob.employment_status ??
            apiJob.employmentStatusName ??
            apiJob.empStatusName;

        const actualEmploymentStatus = readLabel(statusField);

        // Validate Job Title when the API exposes it.
        expect(
            actualJobTitle,
            'Job Title is missing from the job-details API response'
        ).toBeTruthy();

        expect(actualJobTitle).toBe(employee.jobTitle);

        // Do not silently pass when status is absent.
        expect(
            actualEmploymentStatus,
            'Employment Status is missing. Inspect the logged Job Details API Response and map its actual field.'
        ).toBeTruthy();

        expect(actualEmploymentStatus).toBe(employee.employmentStatus);

        console.log('API employee validation passed.');
        console.log(`Job Title: ${actualJobTitle}`);
        console.log(`Employment Status: ${actualEmploymentStatus}`);
    }

    // 11. DELETE EMPLOYEE
    async deleteEmployee(empId) {
        await this.employeeListLink.click();
        await this.employeeIdInput.fill(empId);
        await this.searchButton.click();

        const employeeRow = this.page
            .locator('.oxd-table-card')
            .filter({
                has: this.page.getByText(empId, { exact: true })
            });

        await expect(employeeRow).toBeVisible();

        await employeeRow.locator('button').last().click();

        await this.page.getByRole('button', {
            name: /Yes,\s*Delete/
        }).click();

        await expect(
            this.page.getByText('Successfully Deleted')
        ).toBeVisible();
    }

    // 12. LOGOUT
    async logout() {
        await this.profilePicture.click();
        await this.logoutOption.click();

        await expect(this.username).toBeVisible();
    }
}

module.exports = { EmployeePage };
