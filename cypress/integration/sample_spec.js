/// <reference types="Cypress" />

describe('Billing order test', function() {
  beforeEach(function () {
    cy.visit('/billing-order-form/')
    cy.get("input[type='password']").type('Testing')
    cy.contains("Submit").click()
  })

  it('Visits the billing order form', function() {
    cy.get("input[name='wpforms[fields][0][first]']").type("John")
    cy.get("input[name='wpforms[fields][0][last]']").type("Smith")
    cy.get("input[name='wpforms[fields][1]']").type("fake-email@mail.com")
    cy.get("input[name='wpforms[fields][2]']").type("8800200555")
    cy.get("input[name='wpforms[fields][3][address1]']").type("Address 1")
    cy.get("input[name='wpforms[fields][3][address2]']").type("Address 2")
    cy.get("input[name='wpforms[fields][3][city]']").type("New-York")
    cy.get("input[name='wpforms[fields][3][postal]']").type("54321")
    cy.get("select[name='wpforms[fields][3][state]']").select("New York")
    cy.get("textarea[name='wpforms[fields][6]']").type("Comment for billing order")
    cy.get('[type="radio"]').first().check()
    cy.get("button[name='wpforms[submit]']").click()

    cy.get("div[id='wpforms-confirmation-24']").children("p").should('have.text', 'Thanks for contacting us! We will be in touch with you shortly.')
  })
})