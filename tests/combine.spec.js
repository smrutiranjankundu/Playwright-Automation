import { POManager } from "../PageObjects/POManager";
//import testdata from '../utils/parabank.json' assert {type: 'json'};
import { customtest as test, expect } from '../Fixtures/testfixture';
test.describe.parallel("Suite", () => {
    test('@Registration', async ({ page, testdataForregistration }) => {
        const poManager = new POManager(page);
        const homepage = poManager.getHomepage();
        homepage.goTo();
        homepage.clickOnRegisterLink();

        const newuser = poManager.getregistrationpage(page);
        await newuser.registernewUser(
            testdataForregistration.firstname,
            testdataForregistration.lastname,
            testdataForregistration.address,
            testdataForregistration.city,
            testdataForregistration.state,
            testdataForregistration.zipcode,
            testdataForregistration.phonenumber,
            testdataForregistration.ssn,
            testdataForregistration.username,
            testdataForregistration.password,
            testdataForregistration.confirmpassword,
        );
        newuser.clickOnRegisterbutton();
        await page.waitForTimeout(3000);

    })

    test('@loginPage', async ({ page, testdataForregistration }) => {

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
})
