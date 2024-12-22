class UserPage {

    constructor(){
        this.signupName = '[data-qa="signup-name"]';
        this.firstName = '[data-qa="first_name"]';
        this.lastName = '[data-qa="last_name"]';
        this.email = '[data-qa="signup-email"]';
        this.pass = '[data-qa="password"]';
        this.signupButton = '[data-qa="signup-button"]';
        this.address = '[data-qa="address"]';
        this.selCountry = '[data-qa="country"]'; //select
        this.state = '[data-qa="state"]';
        this.city = '[data-qa="city"]';
        this.zipcode = '[data-qa="zipcode"]';
        this.mobileNumber = '[data-qa="mobile_number"]';
        this.accountCreateButton = '[data-qa="create-account"]';
        this.textSuccess = '.col-sm-9 > :nth-child(2)';
    }

    get SignupName (){
        return  cy.get(this.signupName);
    }

    get FirstName (){
        return  cy.get(this.firstName);
    }

    get LastName (){
        return  cy.get(this.lastName);
    }

    get Email (){
        return  cy.get(this.email);
    }

    get Pass (){
        return  cy.get(this.pass);
    }

    get SignupButton (){
        return  cy.get(this.signupButton);
    }

    get Address (){
        return  cy.get(this.address);
    }

    get SelCountry (){
        return  cy.get(this.selCountry);
    }

    get State (){
        return  cy.get(this.state);
    }

    get City (){
        return  cy.get(this.city);
    }

    get Zipcode (){
        return  cy.get(this.zipcode);
    }

    get MobileNumber (){
        return  cy.get(this.mobileNumber);
    }

    get AccountCreateButton (){
        return  cy.get(this.accountCreateButton);
    }

    get TextSuccess (){
        return  cy.get(this.textSuccess);
    }
}

const userPage = new UserPage();
export default userPage;