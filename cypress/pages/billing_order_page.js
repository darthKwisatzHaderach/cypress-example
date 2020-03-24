class BillingOrderPage {
    fillFirstName(first_name) {
        cy.get("input[name='wpforms[fields][0][first]']").type(first_name)

        return this
    }
    
    fillLastName(last_name) {
        cy.get("input[name='wpforms[fields][0][last]']").type(last_name)

        return this
    }

    fillEmail(email) {
        cy.get("input[name='wpforms[fields][1]']").type(email)

        return this
    }

    fillPhone(phone) {
        cy.get("input[name='wpforms[fields][2]']").type(phone)

        return this
    }

    fillAddressLine1(address_line1) {
        cy.get("input[name='wpforms[fields][3][address1]']").type(address_line1)

        return this
    }

    fillAddressLine2(address_line2) {
        cy.get("input[name='wpforms[fields][3][address2]']").type(address_line2)

        return this
    }

    fillCity(city) {
        cy.get("input[name='wpforms[fields][3][city]']").type(city)

        return this
    }

    fillZipCode(zip_code) {
        cy.get("input[name='wpforms[fields][3][postal]']").type(zip_code)

        return this
    }

    selectState(state) {
        cy.get("select[name='wpforms[fields][3][state]']").select(state)

        return this
    }

    fillComment(comment) {
        cy.get("textarea[name='wpforms[fields][6]']").type(comment)

        return this
    }

    selectItem(item) {
        cy.contains(`${item}`).click()

        return this
    }

    clickSubmit() {
        cy.get("button[name='wpforms[submit]']").click()

        return this
    }

    sendOrder(order) {
        this.fillFirstName(order.first_name)
        this.fillLastName(order.last_name)
        this.fillEmail(order.email)
        this.fillPhone(order.phone)
        this.fillAddressLine1(order.address_line1)
        this.fillAddressLine2(order.address_line2)
        this.fillCity(order.city)
        this.fillZipCode(order.zip_code)
        this.selectState(order.state)
        this.selectItem(order.item)
        this.fillComment(order.comment)
        this.clickSubmit()

        return this
    }

    getSuccessMessage() {
        return cy.get("div[id='wpforms-confirmation-24']").children("p")
    }
}
  
export default BillingOrderPage;