/// <reference types="Cypress" />
import AuthorizationPage from '../pages/authorization_page'
import BillingOrderPage from '../pages/billing_order_page';

describe('Billing order test', function() {
  const orders = require('../fixtures/billing_orders.json')

  orders.forEach((order) => {
    it(`Send billing order. ${order.test_name}`, () => {
      const authorization_page = new AuthorizationPage()
      const billing_order_page = new BillingOrderPage()
      
      authorization_page
        .visit('/billing-order-form/')
        .authorize('Testing')

      billing_order_page.sendOrder(order)

      billing_order_page
        .getSuccessMessage()
        .should('have.text', 'Thanks for contacting us! We will be in touch with you shortly.')
    })
  })
})