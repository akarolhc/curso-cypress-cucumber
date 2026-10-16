import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I select {string} items per page', limit => {
  cy.get('select[name="pagination-limit"]').select(limit)
})

Then('I should see {string} items in the table', limit => {
  cy.get('table tbody tr').should('have.length', Number(limit))
})