import { POManager } from "../PageObjects/POManager";
import { customtest as test, expect } from "../Fixtures/testfixture";

test('loginPage', async ({ page, testdataForregistration }) => {

    const poManager = new POManager(page);
    const homepage = poManager.getHomepage();
    homepage.goTo();

    const loginpage = poManager.getloginpage();
    await loginpage.clickonLogin(
        testdataForregistration.username,
        testdataForregistration.password
    )

    await page.waitForTimeout(3000);
})