
const base = require('@playwright/test');
const { EmployeePage } = require('../pages/EmployeePage');

const employeeTest = base.test.extend({
    employeePage: async ({ page }, use) => {
        const employeePage = new EmployeePage(page);
        await use(employeePage);
    }
});

module.exports = {
    test: employeeTest,
    expect: base.expect
};
