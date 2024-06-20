const autenticacion = require('../tasks/login_task');
const question = require('../questions/validation_home');

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('v1/index.html');
    cy.title().should('eq', 'Swag Labs');
  });

  it('Success login', () => {
    cy.saucedemoLogin('standard_user', 'secret_sauce');
    cy.loginSucess();
  });
});
