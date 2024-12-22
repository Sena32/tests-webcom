/// <reference types="cypress"/>
import userPage from "../pages/Users/UserPage"

describe('Registro de usuário', () => {
    beforeEach (() => {      
      cy.visit("https://automationexercise.com");
    });

    it('TC001-1.1 - Registro de um usuário com informações válidas.', () => {
      cy.contains('a', 'Signup / Login').click();

      cy.url().should('include', '/login');
      const emailUnique = `testuser-${Math.random().toString(36).substring(2, 10)}@example.com`;

      cy.createAccount(emailUnique);
        
      userPage.TextSuccess.should('be.visible');
      userPage.TextSuccess.should('have.text','Congratulations! Your new account has been successfully created!');
    });


    it('TC001-1.2 - Registro de um usuário com informações válidas.', () => {
      cy.contains('a', 'Signup / Login').click();

      cy.url().should('include', '/login');
      const emailUnique = `testuser-${Math.random().toString(36).substring(2, 10)}@example.com`;
      cy.createAccount(emailUnique);
      cy.get('[data-qa="continue-button"]').click();
      cy.wait(5000);
      cy.contains('a', 'Logout').click();
      cy.contains('a', 'Signup / Login').click();
      cy.fixture('user.json').then((user) => {
        userPage.SignupName.type(user.signupName);
        userPage.Email.type(emailUnique);

        userPage.SignupButton.click();
  
        cy.get('.signup-form > form > p').should('be.visible');

        cy.get('.signup-form > form > p').should('have.text','Email Address already exist!');
      });
    });
  });