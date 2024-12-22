/// <reference types="cypress"/>

describe('Registro de usuário Backend', () => {

    it('TC001-1.5 - Deletar usuario.', () => {
      cy.fixture('user.json').then((user) => { 
        cy.request({
          method: 'DELETE',
          url: 'https://automationexercise.com/api/deleteAccount',
          body: {
              email: user.email,
              password: user.password
          }
      }).should(function(response){
          const { status } = response;
          expect(status).to.be.equal(200);
      });
      });
    });


    it('TC002-1.3 - Busca vazia.', () => {
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/searchProduct',
        body: {
          search_product: ''
        }
      }).should(function(response){
          const { status } = response;
          expect(status).to.be.equal(200);
      });
      });
  });