import {test, expect} from '@playwright/test';
test('new test case', async ({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveTitle(/ParaBank/);
    await page.waitForTimeout(3000);
});