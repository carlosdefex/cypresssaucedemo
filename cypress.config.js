const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  projectId: 'p6bqb1',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.js'),
  },
  component: {
    // Example placeholder, update as necessary for component testing
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    supportFile: path.resolve(__dirname, 'cypress/support/component.js'),
  },
});
