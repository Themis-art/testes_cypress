const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  e2e: {
    experimentalRunAllSpecs: true, // Adicionada a vírgula aqui
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://automationexercise.com/'
  },
});

import LoginPage from '../support/page-objects/login'

Cypress.Commands.add('login', (nome, senha) => {
  cy.session([nome, senha], () => {
    cy.visit('/')
    LoginPage.fazerLogin(nome, senha)
    cy.contains('Login realizado com sucesso')
    cy.url().should('include', '/Home')
  })
})
