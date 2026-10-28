
// tests/employee.spec.js

const { test, expect } = require('../fixtures/employeeFixture');
const employee = require('./employee.json');

test(
    'Add employee, update job details, validate API and delete employee',
    async ({ employeePage }) => {

        // Step 1: Login
        await employeePage.open();
        await employeePage.login('Admin', 'admin123');

        await expect(employeePage.dashboardHeading).toBeVisible();

        // Step 2: Add employee
        await employeePage.openAddEmployee();

        const empId = await employeePage.addEmployee(employee);

        console.log(`Created employee ID: ${empId}`);

        // Step 3: Search and open employee
        await employeePage.searchEmployee(empId);

        // Step 4: Update job details
        await employeePage.openJobTab();
        await employeePage.updateJobDetails(employee);

        // Step 5: Verify updated details in UI
        await employeePage.verifyJobDetails(employee);

        console.log('UI job details validation passed.');

        // Step 6: Validate employee and job details through API
        await employeePage.validateEmployeeAPI(empId, employee);

        // Step 7: Delete employee after validation
        await employeePage.deleteEmployee(empId);

        // Step 8: Logout
        await employeePage.logout();
    }
);
