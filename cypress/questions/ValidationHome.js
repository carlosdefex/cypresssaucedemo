const titulos = require('../pages/HomePage');

Cypress.Commands.add('loginSucess', () => {
  cy.get(titulos.TITLE_HOME).should('contains.text', 'Products');
});
