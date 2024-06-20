describe('template spec', () => {
  beforeEach(() => {
    cy.visit('v1/index.html');
    cy.title().should('eq', 'Swag Labs');
  });

  it('success login', () => {
    cy.saucedemoLogin('standard_user', 'secret_sauce');
    cy.loginSucess();
  });
});
