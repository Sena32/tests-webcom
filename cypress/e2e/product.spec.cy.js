/// <reference types="cypress"/>
import userPage from "../pages/Users/UserPage"

describe('Pesquisa e visualização de produtos', () => {
    beforeEach (() => {      
      cy.visit("https://automationexercise.com");
      cy.contains('a', 'Products').click();
    });

    it('TC002-1.1 - Buscar no site com produto cadastrado', () => {

      const search = 'dress';
      cy.get("#search_product").type(search);
      cy.get("#submit_search").click();
      cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').should('contain','Sleeveless Dress');
    });


    it('TC002-1.2 - Buscar produto que não existe', () => {
      const search = 'dressesse';
      cy.get("#search_product").type(search);
      cy.get("#submit_search").click();
      cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p', { timeout: 10000 }).should('not.exist');
      });
  });