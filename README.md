# Blankfactor Cypress Template

## About
This project is created using Cypress to serve as a template for creating new projects at Blankfactor. The project adopts the Screenplay pattern, organizing the test structure into several specific folders to encapsulate different aspects of the testing process.

### Project Structure
- **e2e**: This folder contains end-to-end test scenarios.
- **Pages**: This directory maps all interactions with the web drivers, including locators.
- **Questions**: Contains assertions used to verify the state of the application.
- **Task**: Includes all actions that the actor needs to perform.
- **Interaction**: Houses utilities shared across different parts of the tests.

## Installation and Running Tests

Follow these steps to set up and run the tests in this project:

1. **Install Cypress**:
Install Cypress as a development dependency using npm:
   ```sh
   cd /your/project/path
   ```
   ```sh
   npm install cypress --save-dev
   ```

2. **Run Cypress**:
If this is your first time running Cypress, follow the on-screen instructions to get started:
    ```sh
    npx cypress open
    ```
3. **Project Setup**:
- **Create or Select a Project**: Use the Launchpad to either set up a new project or select an existing one.
- **Configure Testing Type**: Choose the type of testing you need (e.g., E2E, Component Testing).
- **Select a Browser**: Choose a browser in which to run your tests.

4. **Write Tests**
After setting up your project, you can begin writing tests. Create `.spec.js` files in the `cypress/integration` directory.

5. **Run Tests**
To run your tests, use the Cypress Test Runner, which can be accessed via the Launchpad or by running the following command:
    ```sh
    npx cypress run
    ```

For detailed documentation on how to write tests using Cypress, visit [Cypress Documentation](https://docs.cypress.io).

