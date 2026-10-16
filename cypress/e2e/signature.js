import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I access the XYZ app', () => {
  cy.visit('https://xyz.com')
})

When('I type {string} in the signature field', name => {
  cy.get('input[data-testid="signature"]').type(name)
})

Then('I see a preview of my signature in Italic letters (ex.: _{string}_)', name => {
  cy.contains('#signature-preview', name)
    .should('have.css', 'font-style')
    .and('match', /italic/)
    .and('be.visible')
})