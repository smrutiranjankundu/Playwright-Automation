//import { test, expect } from "@playwright/test";
// import { HomePage } from "../PageObjects/HomePage";
// import { RegistrationPage } from "../PageObjects/RegistrationPage";
import { POManager } from "../PageObjects/POManager";
//import testdata from '../utils/parabank.json' assert {type: 'json'};
import { customtest as test, expect } from '../Fixtures/testfixture';


// test ('Registration',async({page})=>{
// const homepage= new HomePage(page);
// homepage.goTo();
// homepage.clickOnRegisterLink();
// const newuser= new RegistrationPage(page);
// await newuser.registernewUser('Smruti', 'Ranjan', 'Palasuni', 'Bhubaneswar', 'Odisha', '753001', '9090315627','23443','sMRUTI', 'rANJAN');
// newuser.clickOnRegisterbutton();
// await page.waitForTimeout(3000);

// })
// for (const data of testdata) {
//     test(`Registration${data.username}`, async ({ page }) => {
//         const poManager = new POManager(page);
//         const homepage = poManager.getHomepage();
//         homepage.goTo();
//         homepage.clickOnRegisterLink();

//         const newuser = poManager.getregistrationpage(page);
//         await newuser.registernewUser(
//             data.firstname,
//             data.lastname,
//             data.address,
//             data.city,
//             data.state,
//             data.zipcode,
//             data.phonenumber,
//             data.ssn,
//             data.username,
//             data.password,
//             data.confirmpassword
//         );
//         newuser.clickOnRegisterbutton();
//         await page.waitForTimeout(3000);

//     })
// }

test('Registration', async ({ page, testdataForregistration }) => {
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