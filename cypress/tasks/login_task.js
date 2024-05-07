const login_page = require('../pages/login_page')

Cypress.Commands.add("saucedemoLogin", (usuario, clave) => {
    cy.get(login_page.INPUT_USUARIO).type(usuario)
    cy.get(login_page.INPUT_PASSWORD).type(clave)
    cy.get(login_page.BTN_LOGIN).click()
})