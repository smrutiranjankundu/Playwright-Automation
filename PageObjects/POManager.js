import { HomePage } from "./HomePage";
import { RegistrationPage } from "./RegistrationPage";
import { LoginPage } from "./LoginPage";
export class POManager{
    constructor(page){
        this.page=page;
        this.homepage=new HomePage(this.page)
        this.registrationpage=new RegistrationPage(this.page);
        this.loginpage=new LoginPage(this.page);
    }
    getHomepage(){
        return this.homepage;
    }
    getregistrationpage(){
      return  this.registrationpage
    }
    getloginpage(){
        return this.loginpage
    }
}