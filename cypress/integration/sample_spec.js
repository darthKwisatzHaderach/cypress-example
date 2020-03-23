/// <reference types="Cypress" />

describe('Billing order test', function() {
  const orders = require('../fixtures/billing_orders.json')

  orders.forEach((order) => {
    it('Send billing order with all required parameters', () => {
      cy.visit('/billing-order-form/')
      cy.get("input[type='password']").type('Testing')
      cy.contains("Submit").click()
      cy.get("input[name='wpforms[fields][0][first]']").type(order.first_name)
      cy.get("input[name='wpforms[fields][0][last]']").type(order.last_name)
      cy.get("input[name='wpforms[fields][1]']").type(order.email)
      cy.get("input[name='wpforms[fields][2]']").type(order.phone)
      cy.get("input[name='wpforms[fields][3][address1]']").type(order.address_line1)
      cy.get("input[name='wpforms[fields][3][address2]']").type(order.address_line2)
      cy.get("input[name='wpforms[fields][3][city]']").type(order.city)
      cy.get("input[name='wpforms[fields][3][postal]']").type(order.zip_code)
      cy.get("select[name='wpforms[fields][3][state]']").select(order.state)
      cy.get("textarea[name='wpforms[fields][6]']").type(order.comment)
      cy.get('[type="radio"]').first().check()
      cy.get("button[name='wpforms[submit]']").click()
  
      cy.get("div[id='wpforms-confirmation-24']").children("p").should('have.text', 'Thanks for contacting us! We will be in touch with you shortly.')
    })
  })
})