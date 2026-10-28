# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: employee.spec.js >> Add employee, update job details, validate API and delete employee
- Location: tests\employee.spec.js:7:1

# Error details

```
Error: API request failed: GET /web/index.php/api/v2/pim/employees/0631?model=detailed. HTTP 422. Response: {"error":{"status":"422","message":"Invalid Parameter","data":{"invalidParamKeys":["empNumber"]}}}
```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - generic:
      - complementary [ref=f6e4]:
        - navigation "Sidepanel" [ref=f6e5]:
          - generic [ref=f6e6]:
            - link [ref=f6e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f6e9]
            - text: 
          - generic [ref=f6e10]:
            - generic [ref=f6e11]:
              - generic [ref=f6e12]:
                - textbox "Search" [ref=f6e15]
                - button "" [ref=f6e16] [cursor=pointer]
              - separator [ref=f6e18]
            - list [ref=f6e19]:
              - listitem [ref=f6e20]:
                - link "Admin" [ref=f6e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f6e25]:
                - link "PIM" [ref=f6e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f6e41]:
                - link "Leave" [ref=f6e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f6e46]:
                - link "Time" [ref=f6e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f6e54]:
                - link "Recruitment" [ref=f6e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f6e62]:
                - link "My Info" [ref=f6e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f6e70]:
                - link "Performance" [ref=f6e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f6e80]:
                - link "Dashboard" [ref=f6e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f6e85]:
                - link "Directory" [ref=f6e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f6e90]:
                - link "Maintenance" [ref=f6e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f6e96]:
                - link "Claim" [ref=f6e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f6e105]:
                - link "Buzz" [ref=f6e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f6e110]:
        - generic [ref=f6e111]:
          - generic [ref=f6e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f6e114]
          - link [ref=f6e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f6e117] [cursor=pointer]
          - list [ref=f6e123]:
            - listitem [ref=f6e124]:
              - generic [ref=f6e125] [cursor=pointer]:
                - img "profile picture" [ref=f6e126]
                - paragraph [ref=f6e127]: Roja Ambika
                - generic [ref=f6e128]: 
        - navigation "Topbar Menu" [ref=f6e130]:
          - list [ref=f6e131]:
            - listitem [ref=f6e132] [cursor=pointer]:
              - generic [ref=f6e133]:
                - text: Configuration
                - generic [ref=f6e134]: 
            - listitem [ref=f6e135] [cursor=pointer]:
              - link "Employee List" [ref=f6e136]:
                - /url: "#"
            - listitem [ref=f6e137] [cursor=pointer]:
              - link "Add Employee" [ref=f6e138]:
                - /url: "#"
            - listitem [ref=f6e139] [cursor=pointer]:
              - link "Reports" [ref=f6e140]:
                - /url: "#"
            - button "" [ref=f6e142] [cursor=pointer]
    - generic [ref=f6e144]:
      - generic [ref=f6e148]:
        - generic [ref=f6e149]:
          - generic [ref=f6e150]:
            - heading "Sample S" [level=6] [ref=f6e152]
            - img "profile picture" [ref=f6e155] [cursor=pointer]
          - tablist [ref=f6e156]:
            - tab [ref=f6e157]:
              - link "Personal Details" [ref=f6e158] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPersonalDetails/empNumber/505
            - tab [ref=f6e159]:
              - link "Contact Details" [ref=f6e160] [cursor=pointer]:
                - /url: /web/index.php/pim/contactDetails/empNumber/505
            - tab [ref=f6e161]:
              - link "Emergency Contacts" [ref=f6e162] [cursor=pointer]:
                - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/505
            - tab [ref=f6e163]:
              - link "Dependents" [ref=f6e164] [cursor=pointer]:
                - /url: /web/index.php/pim/viewDependents/empNumber/505
            - tab [ref=f6e165]:
              - link "Immigration" [ref=f6e166] [cursor=pointer]:
                - /url: /web/index.php/pim/viewImmigration/empNumber/505
            - tab [ref=f6e167]:
              - link "Job" [ref=f6e168] [cursor=pointer]:
                - /url: /web/index.php/pim/viewJobDetails/empNumber/505
            - tab [ref=f6e169]:
              - link "Salary" [ref=f6e170] [cursor=pointer]:
                - /url: /web/index.php/pim/viewSalaryList/empNumber/505
            - tab [ref=f6e171]:
              - link "Report-to" [ref=f6e172] [cursor=pointer]:
                - /url: /web/index.php/pim/viewReportToDetails/empNumber/505
            - tab [ref=f6e173]:
              - link "Qualifications" [ref=f6e174] [cursor=pointer]:
                - /url: /web/index.php/pim/viewQualifications/empNumber/505
            - tab [ref=f6e175]:
              - link "Memberships" [ref=f6e176] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMemberships/empNumber/505
        - generic [ref=f6e177]:
          - generic [ref=f6e178]:
            - heading "Job Details" [level=6] [ref=f6e179]
            - separator [ref=f6e180]
            - generic [ref=f6e181]:
              - generic [ref=f6e183]:
                - generic [ref=f6e185]:
                  - generic [ref=f6e186]: Joined Date
                  - generic [ref=f6e190]:
                    - textbox "yyyy-dd-mm" [ref=f6e191]
                    - generic [ref=f6e192] [cursor=pointer]: 
                - generic [ref=f6e194]:
                  - generic [ref=f6e195]: Job Title
                  - generic [ref=f6e199] [cursor=pointer]:
                    - generic [ref=f6e200]: QA Engineer
                    - generic [ref=f6e201]: 
                - generic [ref=f6e204]:
                  - generic [ref=f6e205]: Job Specification
                  - paragraph [ref=f6e209]: Not Defined
                - generic [ref=f6e211]:
                  - generic [ref=f6e212]: Job Category
                  - generic [ref=f6e216] [cursor=pointer]:
                    - generic [ref=f6e217]: "-- Select --"
                    - generic [ref=f6e218]: 
                - generic [ref=f6e221]:
                  - generic [ref=f6e222]: Sub Unit
                  - generic [ref=f6e226] [cursor=pointer]:
                    - generic [ref=f6e227]: "-- Select --"
                    - generic [ref=f6e228]: 
                - generic [ref=f6e231]:
                  - generic [ref=f6e232]: Location
                  - generic [ref=f6e236] [cursor=pointer]:
                    - generic [ref=f6e237]: "-- Select --"
                    - generic [ref=f6e238]: 
                - generic [ref=f6e241]:
                  - generic [ref=f6e242]: Employment Status
                  - generic [ref=f6e246] [cursor=pointer]:
                    - generic [ref=f6e247]: Full-Time Permanent
                    - generic [ref=f6e248]: 
              - separator [ref=f6e250]
              - generic [ref=f6e251]:
                - paragraph [ref=f6e252]: Include Employment Contract Details
                - checkbox [ref=f6e255]
              - separator [ref=f6e257]
              - button "Save" [active] [ref=f6e259] [cursor=pointer]
          - separator [ref=f6e260]
          - generic [ref=f6e262]:
            - heading "Employee Termination / Activiation" [level=6] [ref=f6e263]
            - button "Terminate Employment" [ref=f6e264] [cursor=pointer]
          - generic [ref=f6e265]:
            - separator [ref=f6e266]
            - generic [ref=f6e268]:
              - heading "Attachments" [level=6] [ref=f6e269]
              - button " Add" [ref=f6e270] [cursor=pointer]:
                - generic [ref=f6e271]: 
                - text: Add
            - generic [ref=f6e272]:
              - separator [ref=f6e273]
              - generic [ref=f6e274]: No Records Found
            - table [ref=f6e277]:
              - rowgroup [ref=f6e278]:
                - row [ref=f6e279]:
                  - columnheader "" [ref=f6e280]:
                    - generic [ref=f6e282] [cursor=pointer]:
                      - checkbox "" [ref=f6e283]
                      - generic [ref=f6e284]: 
                  - columnheader "File Name" [ref=f6e286]
                  - columnheader "Description" [ref=f6e287]
                  - columnheader "Size" [ref=f6e288]
                  - columnheader "Type" [ref=f6e289]
                  - columnheader "Date Added" [ref=f6e290]
                  - columnheader "Added By" [ref=f6e291]
                  - columnheader "Actions" [ref=f6e292]
              - rowgroup
      - generic [ref=f6e293]:
        - paragraph [ref=f6e294]: OrangeHRM OS 5.9
        - paragraph [ref=f6e295]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f6e296] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f6e298] [cursor=pointer]:
    - generic [ref=f6e299]:
      - generic [ref=f6e300]: 
      - generic [ref=f6e303]:
        - paragraph [ref=f6e304]: Success
        - paragraph [ref=f6e305]: Successfully Updated
    - button "×" [ref=f6e307]
```

# Test source

```ts
  85  | 
  86  |     // 2. LOGIN
  87  |     async login(username, password) {
  88  |         await this.username.fill(username);
  89  |         await this.password.fill(password);
  90  |         await this.loginButton.click();
  91  | 
  92  |         await expect(this.dashboardHeading).toBeVisible();
  93  |     }
  94  | 
  95  |     // 3. OPEN ADD EMPLOYEE
  96  |     async openAddEmployee() {
  97  |         await this.pimLink.click();
  98  |         await this.addEmployeeLink.click();
  99  |     }
  100 | 
  101 |     // 4. ADD EMPLOYEE
  102 |     async addEmployee(employee) {
  103 |         if (employee.photo) {
  104 |             await this.photoInput.setInputFiles(employee.photo);
  105 |         }
  106 | 
  107 |         await this.firstName.fill(employee.firstName);
  108 |         await this.lastName.fill(employee.lastName);
  109 | 
  110 |         // Capture generated employee ID before saving.
  111 |         const empId = await this.employeeIdInput.inputValue();
  112 | 
  113 |         await this.saveButton.click();
  114 |         await expect(this.successSaved).toBeVisible();
  115 | 
  116 |         expect(empId).not.toBe('');
  117 | 
  118 |         return empId;
  119 |     }
  120 | 
  121 |     // 5. SEARCH AND OPEN EMPLOYEE
  122 |     async searchEmployee(empId) {
  123 |         await this.employeeListLink.click();
  124 | 
  125 |         await this.employeeIdInput.fill(empId);
  126 |         await this.searchButton.click();
  127 | 
  128 |         const employeeRow = this.page
  129 |             .locator('.oxd-table-card')
  130 |             .filter({ has: this.page.getByText(empId, { exact: true }) });
  131 | 
  132 |         await expect(employeeRow).toBeVisible();
  133 |         await employeeRow.click();
  134 |     }
  135 | 
  136 |     // 6. OPEN JOB TAB
  137 |     async openJobTab() {
  138 |         await this.jobTab.click();
  139 |     }
  140 | 
  141 |     // 7. UPDATE JOB DETAILS
  142 |     async updateJobDetails(employee) {
  143 |         await this.jobTitleDropdown.click();
  144 | 
  145 |         await this.page.getByRole('option', {
  146 |             name: employee.jobTitle,
  147 |             exact: true
  148 |         }).click();
  149 | 
  150 |         await this.employmentStatusDropdown.click();
  151 | 
  152 |         await this.page.getByRole('option', {
  153 |             name: employee.employmentStatus,
  154 |             exact: true
  155 |         }).click();
  156 | 
  157 |         await this.saveButton.click();
  158 | 
  159 |         await expect(this.successUpdated).toBeVisible();
  160 |     }
  161 | 
  162 |     // 8. VERIFY JOB DETAILS IN UI
  163 |     async verifyJobDetails(employee) {
  164 |         await expect(this.jobTitleValue)
  165 |             .toHaveText(employee.jobTitle);
  166 | 
  167 |         await expect(this.employmentStatusValue)
  168 |             .toHaveText(employee.employmentStatus);
  169 |     }
  170 | 
  171 |     // 9. API HELPER
  172 |     async requestEmployeeAPI(endpoint) {
  173 |         const response = await this.page.request.get(
  174 |             `https://opensource-demo.orangehrmlive.com${endpoint}`,
  175 |             {
  176 |                 headers: {
  177 |                     Accept: 'application/json'
  178 |                 }
  179 |             }
  180 |         );
  181 | 
  182 |         const responseText = await response.text();
  183 | 
  184 |         if (!response.ok()) {
> 185 |             throw new Error(
      |                   ^ Error: API request failed: GET /web/index.php/api/v2/pim/employees/0631?model=detailed. HTTP 422. Response: {"error":{"status":"422","message":"Invalid Parameter","data":{"invalidParamKeys":["empNumber"]}}}
  186 |                 `API request failed: GET ${endpoint}. ` +
  187 |                 `HTTP ${response.status()}. Response: ${responseText}`
  188 |             );
  189 |         }
  190 | 
  191 |         let body;
  192 | 
  193 |         try {
  194 |             body = JSON.parse(responseText);
  195 |         } catch {
  196 |             throw new Error(
  197 |                 `API returned a non-JSON response for ${endpoint}: ` +
  198 |                 responseText.slice(0, 300)
  199 |             );
  200 |         }
  201 | 
  202 |         return body;
  203 |     }
  204 | 
  205 |     // 10. VALIDATE EMPLOYEE THROUGH API
  206 |     async validateEmployeeAPI(empId, employee) {
  207 |         console.log(`Validating employee ID ${empId} through API`);
  208 | 
  209 |         // Fetch employee identity.
  210 |         const employeeResponse = await this.requestEmployeeAPI(
  211 |             `/web/index.php/api/v2/pim/employees/${encodeURIComponent(empId)}?model=detailed`
  212 |         );
  213 | 
  214 |         const apiEmployee = employeeResponse.data;
  215 | 
  216 |         expect(
  217 |             apiEmployee,
  218 |             'Employee should exist in the API response'
  219 |         ).toBeTruthy();
  220 | 
  221 |         expect(String(apiEmployee.empNumber)).toBe(String(empId));
  222 |         expect(apiEmployee.firstName).toBe(employee.firstName);
  223 |         expect(apiEmployee.lastName).toBe(employee.lastName);
  224 | 
  225 |         console.log('Employee identity matches the test data.');
  226 | 
  227 |         // Fetch job details from the job-details endpoint.
  228 |         const jobResponse = await this.requestEmployeeAPI(
  229 |             `/web/index.php/api/v2/pim/employees/${encodeURIComponent(empId)}/job-details`
  230 |         );
  231 | 
  232 |         const apiJob = Array.isArray(jobResponse.data)
  233 |             ? jobResponse.data[0]
  234 |             : jobResponse.data;
  235 | 
  236 |         expect(
  237 |             apiJob,
  238 |             'Job details should exist in the API response'
  239 |         ).toBeTruthy();
  240 | 
  241 |         // OrangeHRM can return dropdown values as objects.
  242 |         const actualJobTitle =
  243 |             typeof apiJob.jobTitle === 'object'
  244 |                 ? apiJob.jobTitle?.title ?? apiJob.jobTitle?.name
  245 |                 : apiJob.jobTitle;
  246 | 
  247 |         const actualEmploymentStatus =
  248 |             typeof apiJob.employmentStatus === 'object'
  249 |                 ? apiJob.employmentStatus?.name ??
  250 |                   apiJob.employmentStatus?.title
  251 |                 : apiJob.employmentStatus;
  252 | 
  253 |         // If the response uses different field names, fail clearly.
  254 |         expect(
  255 |             actualJobTitle,
  256 |             'API response must contain the job title'
  257 |         ).toBeTruthy();
  258 | 
  259 |         expect(
  260 |             actualEmploymentStatus,
  261 |             'API response must contain the employment status'
  262 |         ).toBeTruthy();
  263 | 
  264 |         // Compare API values with the values entered in the test.
  265 |         expect(actualJobTitle).toBe(employee.jobTitle);
  266 | 
  267 |         expect(actualEmploymentStatus)
  268 |             .toBe(employee.employmentStatus);
  269 | 
  270 |         console.log('API employee validation passed.');
  271 |         console.log(`Employee ID: ${empId}`);
  272 |         console.log(`First name: ${apiEmployee.firstName}`);
  273 |         console.log(`Last name: ${apiEmployee.lastName}`);
  274 |         console.log(`Job title: ${actualJobTitle}`);
  275 |         console.log(`Employment status: ${actualEmploymentStatus}`);
  276 |     }
  277 | 
  278 |     // 11. DELETE EMPLOYEE
  279 |     async deleteEmployee(empId) {
  280 |         await this.employeeListLink.click();
  281 | 
  282 |         await this.employeeIdInput.fill(empId);
  283 |         await this.searchButton.click();
  284 | 
  285 |         const employeeRow = this.page
```