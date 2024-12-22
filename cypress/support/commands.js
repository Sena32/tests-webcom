// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import userPage from "../pages/Users/UserPage"


Cypress.Commands.add("createAccount", (emailRandom) =>{
    cy.fixture('user.json').then((user) => {
        // Preencher os campos do formulário
        userPage.SignupName.type(user.signupName);
        const email = emailRandom ? `${emailRandom}`: user.email;
        userPage.Email.type(email);

        userPage.SignupButton.click();

        userPage.FirstName.type(user.firstName);
        userPage.LastName.type(user.lastName);
        userPage.Pass.type(user.password);
        userPage.Address.type(user.address);
        userPage.SelCountry.select(1);
        userPage.State.type(user.state);
        userPage.City.type(user.city);
        userPage.Zipcode.type(user.zipcode);
        userPage.MobileNumber.type(user.mobileNumber);
        userPage.AccountCreateButton.click();
      });
})