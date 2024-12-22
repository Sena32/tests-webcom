/// <reference types="cypress"/>

describe('Pesquisa e visualização de produtos', () => {
    beforeEach (() => {      
      cy.visit("https://automationexercise.com");
    });

    it('TC003-1.1 - Buscar no site com produto cadastrado', () => {
      cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
      cy.get('.modal-body > :nth-child(1)').should('contain','Your product has been added to cart.');
    });

  });