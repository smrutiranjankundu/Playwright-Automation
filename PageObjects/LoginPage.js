export class LoginPage{
    constructor(page){
        this.page=page;
        this.userName=page.locator("//input[@name='username']");
        this.password=page.locator("//input[@name='password']");
        this.loginLink=page.locator("//input[@value='Log In']");
    }

async clickonLogin(username, password){
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginLink.click();
}

}