export class RegistrationPage {

    constructor(page) {
        this.page = page;
        this.firstName = page.locator('input[name="customer.firstName"]');
        this.lastName = page.locator('input[name="customer.lastName"]');
        this.address = page.locator('input[name="customer.address.street"]');
        this.city = page.locator('input[name="customer.address.city"]');
        this.state = page.locator('input[name="customer.address.state"]');
        this.zipcode = page.locator('input[name="customer.address.zipCode"]');
        this.phone = page.locator('input[name="customer.phoneNumber"]');
        this.ssn = page.locator('input[name="customer.ssn"]');
        this.username = page.locator('input[name="customer.username"]');
        this.password = page.locator('input[name="customer.password"]');
        this.confirm = page.locator('input[name="repeatedPassword"]');
        this.registerbutton = page.locator("input[value='Register']");
    }

    async registernewUser(fname, lname, address, city, state, zipCode, phone, ssn, username, password) {
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zipcode.fill(zipCode);
        await this.phone.fill(phone);
        await this.ssn.fill(ssn);
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirm.fill(password);

    }
    async clickOnRegisterbutton() {
        await this.registerbutton.click();
    }

}