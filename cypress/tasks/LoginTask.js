const { INPUT_USUARIO, INPUT_PASSWORD, BTN_LOGIN } = require('../pages/LoginPage');

Cypress.Commands.add('saucedemoLogin', (userName, password) => {
  cy.get(INPUT_USUARIO).type(userName);
  cy.get(INPUT_PASSWORD).type(password);
  cy.get(BTN_LOGIN).click();
});