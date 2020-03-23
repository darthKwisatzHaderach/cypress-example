// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('authorize', (password) => {
    cy.get("input[type='password']").type(password)
    cy.contains("Submit").click()
})

Cypress.Commands.add('sendBillingOrder', (order) => {
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
    cy.contains(`${order.item}`).click()
    cy.get("button[name='wpforms[submit]']").click()
})