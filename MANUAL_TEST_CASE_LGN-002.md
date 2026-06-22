# Manual Test Case: LGN-002

## Test Case Details

| Property | Value |
|---|---|
| **Test Case ID** | LGN-002 |
| **Test Case Name** | Login with valid username and invalid password |
| **Test Type** | Negative Testing / Functional |
| **Module** | Login |
| **Priority** | High |
| **Severity** | High |
| **Automation Status** | Automated |
| **Author** | QA Team |
| **Created Date** | 2026-06-22 |
| **Last Updated** | 2026-06-22 |
| **Estimated Duration** | 5 minutes |

---

## Objective
To verify that the application correctly rejects login attempts when a valid username is used with an invalid password, and displays an appropriate error message.

---

## Pre-Conditions
1. User has access to ParaBank application
2. Browser is open and network connectivity is available
3. Test user "Testers" exists in the system with password "1234567891"
4. No user is currently logged in
5. Application is in stable state

---

## Test Data

| Field | Value | Notes |
|---|---|---|
| **URL** | https://parabank.parasoft.com/parabank/index.htm | Base URL of ParaBank |
| **Valid Username** | Testers | Existing user in system |
| **Invalid Password** | wrongpassword123 | Intentionally wrong password |
| **Expected Error** | Invalid credentials | Error message to be displayed |

---

## Test Steps

### Step 1: Navigate to ParaBank Login Page
**Action**: Open browser and navigate to https://parabank.parasoft.com/parabank/index.htm

**Expected Result**: 
- Login page loads successfully
- Page title should be "ParaBank | Welcome"
- Username input field is visible and empty
- Password input field is visible and empty
- "Log In" button is visible
- No error messages displayed

**Screenshots**: ✓ Capture if page fails to load

---

### Step 2: Enter Valid Username
**Action**: Click on the username input field and enter "Testers"

**Expected Result**:
- Username field is focused (cursor visible in field)
- Text "Testers" appears in the username field
- Password field remains empty
- No validation errors appear
- "Log In" button is still visible and enabled

**Screenshots**: ✓ Capture for validation

---

### Step 3: Enter Invalid Password
**Action**: Click on the password input field and enter "wrongpassword123"

**Expected Result**:
- Password field is focused
- Text is masked/hidden (dots or asterisks) for security
- Username field still contains "Testers"
- No validation errors appear
- "Log In" button is still enabled

**Screenshots**: ✓ Capture for validation

---

### Step 4: Click Login Button
**Action**: Click the "Log In" button

**Expected Result**:
- Button shows loading state (optional: spinner/loader appears)
- Page attempts to process login request
- Wait for response (typically 2-3 seconds)

**Screenshots**: ✓ Capture loading state if visible

---

### Step 5: Verify Error Message
**Action**: Wait for page response and check for error message

**Expected Result**:
- Login fails
- Page remains on login page (no redirect)
- Error message is displayed clearly
- Error message text contains: "Invalid credentials" OR "Invalid username/password combination"
- Error message is visible in color (typically red background or red text)
- Username field still contains "Testers"
- Password field is cleared or shows placeholder

**Screenshots**: ✓ CAPTURE ERROR MESSAGE

---

### Step 6: Verify Login Button State
**Action**: Observe the login button and form state

**Expected Result**:
- "Log In" button is still enabled and clickable
- Button is not locked or disabled
- Form can be submitted again without page refresh

**Screenshots**: ✓ Capture button state

---

### Step 7: Verify No Session Created
**Action**: Try to navigate to a protected page (if available) or check page source

**Expected Result**:
- User session was NOT created
- Session cookie NOT present in browser
- If protected page is navigated to, user is redirected back to login

**How to Check**:
- Open browser DevTools (F12)
- Go to Application → Cookies
- Verify no session cookie exists
- Or try accessing protected URL directly

**Screenshots**: ✓ Capture browser cookies if needed

---

## Validation Checkpoints

- [ ] Error message appears on login failure
- [ ] Error message text is correct: "Invalid credentials"
- [ ] Error message is clearly visible (good color contrast)
- [ ] Username field retains entered username
- [ ] Password field is cleared after error
- [ ] Login button remains enabled
- [ ] No session cookie created
- [ ] Page remains on login URL (no redirect)
- [ ] HTML response code is 200 (not 500)
- [ ] No JavaScript errors in console

---

## Expected vs Actual Results

| Checkpoint | Expected | Actual | Status |
|---|---|---|---|
| Error message displayed | Yes | [ ] | [ ] Pass [ ] Fail |
| Error message text | "Invalid credentials" | [ ] | [ ] Pass [ ] Fail |
| Username field value | "Testers" | [ ] | [ ] Pass [ ] Fail |
| Password field cleared | Yes | [ ] | [ ] Pass [ ] Fail |
| Login button enabled | Yes | [ ] | [ ] Pass [ ] Fail |
| No session created | Verified | [ ] | [ ] Pass [ ] Fail |
| Page URL | Login page | [ ] | [ ] Pass [ ] Fail |
| Error message visible | Yes | [ ] | [ ] Pass [ ] Fail |

---

## Post-Conditions (After Test)

1. Close browser or logout if user somehow logged in
2. Clear browser cache if needed
3. Document any issues or discrepancies
4. Update test results in test management system
5. If test failed, create defect ticket

---

## Alternate Flows / Edge Cases

### Edge Case 1: Case Sensitivity
- **Action**: Enter username as "testers" (lowercase) with wrong password
- **Expected**: Same error message (username is typically case-insensitive)
- **Status**: [ ] Pass [ ] Fail

### Edge Case 2: Password with Special Characters
- **Action**: Enter password as "wrongpass!@#" with valid username
- **Expected**: Same error message
- **Status**: [ ] Pass [ ] Fail

### Edge Case 3: Spaces in Password
- **Action**: Enter password as "wrongpassword 123" (with space) with valid username
- **Expected**: Same error message (or different error if spaces are invalid)
- **Status**: [ ] Pass [ ] Fail

### Edge Case 4: Very Long Password
- **Action**: Enter password as very long string (100+ characters) with valid username
- **Expected**: Either same error or field limit message
- **Status**: [ ] Pass [ ] Fail

---

## Browser Testing Matrix

| Browser | Version | OS | Status | Notes |
|---|---|---|---|---|
| Chrome | Latest | Windows | [ ] Pass [ ] Fail | |
| Firefox | Latest | Windows | [ ] Pass [ ] Fail | |
| Safari | Latest | macOS | [ ] Pass [ ] Fail | |
| Edge | Latest | Windows | [ ] Pass [ ] Fail | |

---

## Test Execution Notes

**Test Executed By**: _________________________

**Execution Date**: _________________________

**Execution Time**: _________________________ (HH:MM)

**Environment**: 
- [ ] Dev [ ] Staging [ ] Production
- **OS**: _________________________
- **Browser**: _________________________
- **Screen Resolution**: _________________________

**Issues Encountered**:
```
[Space for noting any issues or blockers]
```

**Additional Comments**:
```
[Space for additional observations or notes]
```

---

## Defects Found (If Any)

| Defect ID | Description | Severity | Status |
|---|---|---|---|
| DEF-XXX | | [ ] Critical [ ] High [ ] Medium [ ] Low | [ ] New [ ] Open |
| | | [ ] Critical [ ] High [ ] Medium [ ] Low | [ ] New [ ] Open |

**Defect Details Template**:
```
Title: [Brief defect title]
Description: [What is wrong and what was expected]
Steps to Reproduce: [Exact steps to reproduce]
Expected Result: [What should happen]
Actual Result: [What actually happened]
Screenshots: [Attach evidence]
Severity: [Critical/High/Medium/Low]
Environment: [Browser/OS/URL]
```

---

## Related Test Cases

- **LGN-001**: Login with valid credentials
- **LGN-003**: Login with invalid username
- **LGN-004**: Login with empty username
- **LGN-005**: Login with empty password
- **LGN-006**: Login with both fields empty
- **LGN-009**: Login with SQL injection attempt
- **LGN-010**: Account lockout after failed attempts

---

## Test Execution Checklist

- [ ] Pre-conditions verified
- [ ] Test environment stable
- [ ] Test data available
- [ ] Browser opened and ready
- [ ] All steps executed in order
- [ ] Observations documented
- [ ] Screenshots captured
- [ ] Results validated
- [ ] Defects (if any) documented
- [ ] Test case marked as Pass/Fail
- [ ] Results uploaded to test management system
- [ ] Post-conditions completed

---

## Test Result

### Final Status: [ ] PASS [ ] FAIL [ ] BLOCKED

**Summary**: 
```
[Brief summary of test execution and results]
```

**Pass Criteria Met**: [ ] Yes [ ] No [ ] Partially

**Recommendation**: [ ] Release [ ] Not Ready [ ] Needs Investigation

---

## Sign-Off

**Tester Name**: _________________________

**Date**: _________________________

**Signature**: _________________________

**Reviewer Name**: _________________________

**Review Date**: _________________________

**Reviewer Signature**: _________________________

---

## Appendix: Screenshots

### Screenshot 1: Login Page - Initial State
[Paste screenshot or link]

### Screenshot 2: After Entering Credentials
[Paste screenshot or link]

### Screenshot 3: Error Message Displayed
[Paste screenshot or link]

### Screenshot 4: Browser DevTools - Cookies/Session
[Paste screenshot or link]

---

**Test Case Version**: 1.0  
**Last Updated**: 2026-06-22  
**Next Review Date**: 2026-07-22  
**Test Case Status**: Active
