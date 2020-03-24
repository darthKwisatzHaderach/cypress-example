/// <reference types="Cypress" />
import AuthorizationPage from '../pages/authorization_page';
import BillingOrderPage from '../pages/billing_order_page';

describe('Billing order tests', function() {
  const orders = require('../fixtures/billing_orders.json');

  orders.forEach((order) => {
    it(`Send billing order. ${order.test_name}`, () => {
      const expected_text = 'Thanks for contacting us! We will be in touch with you shortly.';
      const authorization_page = new AuthorizationPage();
      const billing_order_page = new BillingOrderPage();
      
      authorization_page
        .visit('/billing-order-form/')
        .authorize('Testing');

      billing_order_page.sendOrder(order);

      billing_order_page
        .getSuccessMessage()
        .should('have.text', expected_text);
    })
  })

  it('Form validation test', () => {
    const error_class = 'wpforms-error';
    const authorization_page = new AuthorizationPage();
    const billing_order_page = new BillingOrderPage();
    
    authorization_page
      .visit('/billing-order-form/')
      .authorize('Testing');

    billing_order_page.getFirstNameField().should('not.have.class', error_class)
    billing_order_page.getLastNameField().should('not.have.class', error_class)
    billing_order_page.getEmailField().should('not.have.class', error_class)
    billing_order_page.getPhoneField().should('not.have.class', error_class)
    billing_order_page.getCityField().should('not.have.class', error_class)
    billing_order_page.getAddressLine1Field().should('not.have.class', error_class)
    billing_order_page.getAddressLine2Field().should('not.have.class', error_class)
    billing_order_page.getZipCodeField().should('not.have.class', error_class)
    billing_order_page.getCommentField().should('not.have.class', error_class)

    billing_order_page.getSubmitButton().click();

    billing_order_page.getFirstNameField().should('have.class', error_class)
    billing_order_page.getLastNameField().should('have.class', error_class)
    billing_order_page.getEmailField().should('have.class', error_class)
    billing_order_page.getPhoneField().should('have.class', error_class)
    billing_order_page.getCityField().should('have.class', error_class)
    billing_order_page.getAddressLine1Field().should('have.class', error_class)
    billing_order_page.getAddressLine2Field().should('have.class', error_class)
    billing_order_page.getZipCodeField().should('have.class', error_class)
    billing_order_page.getCommentField().should('have.class', error_class)
  })
})