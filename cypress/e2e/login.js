import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the Login form', () => {
  cy.visit('https://example.com/login')
})

When('I submit it with valid credentials', () => {
  cy.get('input[name="username"]').type('username-here')
  cy.get('input[name="password"]').type('secret-password-here', { log: false })
  cy.contains('button', 'Login').click()
})

Then('I see the logged-in features available', () => {
  cy.contains('h1', 'Dashboard').should('be.visible')
  cy.get('[data-testid="avatar"]').should('be.visible')
})
