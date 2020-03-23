/// <reference types="Cypress" />

describe('Billing order test', function() {
  const orders = require('../fixtures/billing_orders.json')

  orders.forEach((order) => {
    it(`Send billing order. ${order.test_name}`, () => {
      cy.visit('/billing-order-form/')
      cy.authorize("Testing")
      cy.sendBillingOrder(order)
      cy.get("div[id='wpforms-confirmation-24']")
        .children("p")
          .should('have.text', 'Thanks for contacting us! We will be in touch with you shortly.')
    })
  })
})