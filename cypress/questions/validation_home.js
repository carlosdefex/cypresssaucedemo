const titulos = require('../pages/home_page');

Cypress.Commands.add('loginSucess', () => {
  cy.get(titulos.TITLE_HOME).should('contains.text', 'Products');
});
