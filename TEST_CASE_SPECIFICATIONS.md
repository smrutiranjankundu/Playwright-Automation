# Banking Project - Detailed Test Case Specifications

## Registration Test Cases

### REG-001: Register with valid data
**Priority**: Critical  
**Severity**: High  
**Category**: Positive Testing  
**Automation**: Priority 1

**Pre-conditions**
- User is on the ParaBank home page
- User has not previously registered with the same username

**Test Steps**
1. Navigate to ParaBank home page
2. Click on "Register" link
3. Fill in all registration fields with valid data:
   - First Name: "John"
   - Last Name: "Doe"
   - Address: "123 Main Street"
   - City: "San Francisco"
   - State: "California"
   - Zip Code: "94102"
   - Phone: "4155551234"
   - SSN: "123456789"
   - Username: "johndoe_auto"
   - Password: "SecurePass123!"
   - Confirm Password: "SecurePass123!"
4. Click "Register" button
5. Verify success message appears

**Expected Result**
- Account created successfully
- Success message displayed: "Your account has been created successfully"
- User redirected to login page or dashboard
- No validation errors

**Post-conditions**
- User account exists in the system
- Credentials can be used for login

---

### REG-004: Register with duplicate username
**Priority**: High  
**Severity**: Medium  
**Category**: Negative Testing  
**Automation**: Priority 2

**Pre-conditions**
- User "Testers" already exists in the system
- User is on the registration page

**Test Steps**
1. Fill registration form with valid data
2. Enter username: "Testers" (existing user)
3. Enter password: "password123"
4. Enter confirm password: "password123"
5. Click "Register" button

**Expected Result**
- Registration fails
- Error message displayed: "Username already exists" or similar
- User remains on registration page
- No account created

---

### REG-005: Register with empty first name
**Priority**: Medium  
**Severity**: Medium  
**Category**: Validation Testing  
**Automation**: Priority 2

**Pre-conditions**
- User is on the registration page

**Test Steps**
1. Leave "First Name" field empty
2. Fill all other fields with valid data
3. Click "Register" button

**Expected Result**
- Form validation error appears
- Error message: "First Name is required"
- Form not submitted
- User remains on registration page

---

### REG-011: Register with invalid zip code format
**Priority**: Medium  
**Severity**: Low  
**Category**: Validation Testing  
**Automation**: Priority 3

**Pre-conditions**
- User is on the registration page

**Test Steps**
1. Fill registration form with valid data
2. Enter invalid zip code: "ABCDE" or "12345-6789-0123"
3. Click "Register" button

**Expected Result**
- Validation error displayed
- Error message: "Zip Code must be 5 digits"
- Form not submitted

---

## Login Test Cases

### LGN-001: Login with valid credentials
**Priority**: Critical  
**Severity**: High  
**Category**: Positive Testing  
**Automation**: Priority 1

**Pre-conditions**
- User "Testers" exists in the system with password "1234567891"
- User is on the ParaBank home page

**Test Steps**
1. Navigate to ParaBank home page
2. Enter username: "Testers"
3. Enter password: "1234567891"
4. Click "Log In" button
5. Wait for page load

**Expected Result**
- Login successful
- User redirected to dashboard/home page
- Welcome message displayed with username
- No error messages

**Post-conditions**
- User session is active
- User can access protected pages

---

### LGN-002: Login with invalid password
**Priority**: High  
**Severity**: High  
**Category**: Negative Testing  
**Automation**: Priority 1

**Pre-conditions**
- User "Testers" exists in the system
- User is on the login page

**Test Steps**
1. Enter username: "Testers"
2. Enter password: "wrongpassword123"
3. Click "Log In" button

**Expected Result**
- Login fails
- Error message displayed: "Invalid username/password combination" or "Invalid credentials"
- User remains on login page
- No session created

---

### LGN-004: Login with empty username
**Priority**: Medium  
**Severity**: Medium  
**Category**: Validation Testing  
**Automation**: Priority 2

**Pre-conditions**
- User is on the login page

**Test Steps**
1. Leave username field empty
2. Enter password: "1234567891"
3. Click "Log In" button

**Expected Result**
- Validation error displayed
- Error message: "Username is required"
- Form not submitted
- User remains on login page

---

### LGN-009: Login with SQL injection attempt
**Priority**: High  
**Severity**: Critical  
**Category**: Security Testing  
**Automation**: Priority 3

**Pre-conditions**
- User is on the login page
- Application should have SQL injection protection

**Test Steps**
1. Enter username: "' OR '1'='1"
2. Enter password: "' OR '1'='1"
3. Click "Log In" button

**Expected Result**
- SQL injection attempt prevented
- Login fails
- Error message displayed
- No unauthorized access granted
- No database exposed

---

### LGN-010: Account lockout after multiple failed attempts
**Priority**: High  
**Severity**: High  
**Category**: Security Testing  
**Automation**: Priority 3

**Pre-conditions**
- User "Testers" exists in the system
- User is on the login page

**Test Steps**
1. Attempt login with correct username but wrong password
2. Repeat step 1 four more times (total: 5 failed attempts)
3. Attempt login with correct credentials

**Expected Result**
- After 5 failed attempts, account locked or access restricted
- Error message displayed: "Account locked" or "Too many login attempts"
- User cannot login even with correct credentials
- Lockout duration: 15-30 minutes (or as per requirement)

**Post-conditions**
- Account is automatically unlocked after timeout period
- Or admin manually unlocks account

---

## Home Page Test Cases

### HP-001: Navigate to ParaBank home page
**Priority**: Critical  
**Severity**: High  
**Category**: Smoke Testing  
**Automation**: Priority 1

**Pre-conditions**
- Application is deployed and accessible
- Network connectivity is available

**Test Steps**
1. Open browser
2. Navigate to URL: "https://parabank.parasoft.com/parabank/index.htm"
3. Wait for page to fully load

**Expected Result**
- Page loads successfully within 5 seconds
- No 404 or error messages
- ParaBank logo/title visible
- "Register" and login fields visible
- Page title: "ParaBank | Welcome"

---

### HP-004: Test page responsiveness
**Priority**: Medium  
**Severity**: Medium  
**Category**: UI Testing  
**Automation**: Priority 2

**Pre-conditions**
- User is on the ParaBank home page

**Test Steps**
1. Open browser DevTools (F12)
2. Change screen resolution to 768x1024 (tablet)
3. Verify all elements are visible and properly aligned
4. Change screen resolution to 375x667 (mobile)
5. Verify all elements are visible and properly aligned
6. Revert to 1920x1080 (desktop)
7. Verify desktop layout restored

**Expected Result**
- Layout responds properly to different screen sizes
- All UI elements remain visible
- No horizontal scrolling required on mobile
- Text remains readable at all sizes
- Buttons remain clickable

---

## Test Data Requirements

### Valid Test Data Sets
```json
{
  "User_1": {
    "firstname": "Testers",
    "lastname": "Talk",
    "address": "address1",
    "city": "San Jose",
    "state": "California",
    "zipcode": "12345",
    "phonenumber": "1234567898",
    "ssn": "1234512345",
    "username": "Testers",
    "password": "1234567891",
    "confirmpassword": "1234567891"
  },
  "User_2": {
    "firstname": "Automation",
    "lastname": "User",
    "address": "address2",
    "city": "New York",
    "state": "NY",
    "zipcode": "54321",
    "phonenumber": "9876543210",
    "ssn": "9876598765",
    "username": "AutoUser",
    "password": "password123",
    "confirmpassword": "password123"
  }
}
```

### Invalid Test Data Sets
```json
{
  "InvalidZipCode": "ABCDE",
  "InvalidPhoneNumber": "123",
  "InvalidSSN": "12345",
  "ShortPassword": "123",
  "SQLInjection_Username": "' OR '1'='1",
  "XSSPayload": "<script>alert('XSS')</script>",
  "VeryLongString": "A string longer than 100 characters...",
  "SpecialCharacters": "@#$%^&*()",
  "EmptyString": "",
  "Spaces": "   "
}
```

---

## Automation Test Script Examples

### Example: REG-001 Test Case
```javascript
test('REG-001: Register with valid data', async ({ page }) => {
    const poManager = new POManager(page);
    
    // Navigate to home page
    const homepage = poManager.getHomepage();
    await homepage.goTo();
    await homepage.clickOnRegisterLink();
    
    // Fill registration form
    const registrationpage = poManager.getregistrationpage(page);
    await registrationpage.registernewUser(
        'John',
        'Doe',
        '123 Main Street',
        'San Francisco',
        'California',
        '94102',
        '4155551234',
        '123456789',
        'johndoe_auto',
        'SecurePass123!'
    );
    
    // Submit form
    await registrationpage.clickOnRegisterbutton();
    
    // Verify success
    await page.waitForTimeout(2000);
    const successMessage = await page.locator('text=Your account has been created successfully').isVisible();
    expect(successMessage).toBeTruthy();
});
```

### Example: LGN-002 Test Case
```javascript
test('LGN-002: Login with invalid password', async ({ page }) => {
    const poManager = new POManager(page);
    
    // Navigate to login
    const homepage = poManager.getHomepage();
    await homepage.goTo();
    
    // Attempt login with wrong password
    const loginpage = poManager.getloginpage();
    await loginpage.clickonLogin('Testers', 'wrongpassword');
    
    // Verify error message
    await page.waitForTimeout(2000);
    const errorMessage = await page.locator('text=Invalid').isVisible();
    expect(errorMessage).toBeTruthy();
});
```

---

## Acceptance Criteria

✅ All test cases passed  
✅ 95% or higher pass rate  
✅ All critical bugs resolved  
✅ Cross-browser compatibility verified  
✅ Performance acceptable (response time < 2 seconds)  
✅ Security testing passed  
✅ Allure reports generated  
✅ Test execution time < 15 minutes for full suite  

---

**Document Version**: 1.0  
**Last Updated**: 2026-06-22  
**Test Automation Status**: In Progress
