const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  projectId: 'p6bqb1',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: path.resolve(__dirname, 'cypress/support/e2e.js')
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
  component: {
    // Example placeholder, update as necessary for component testing
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    supportFile: path.resolve(__dirname, 'cypress/support/component.js')
  }
});
