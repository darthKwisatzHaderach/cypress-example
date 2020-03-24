class BillingOrderPage {
    getFirstNameField() {
        return cy.get("input[name='wpforms[fields][0][first]']");
    }
    
    getLastNameField() {
        return cy.get("input[name='wpforms[fields][0][last]']");
    }

    getEmailField() {
        return cy.get("input[name='wpforms[fields][1]']");
    }

    getPhoneField() {
        return cy.get("input[name='wpforms[fields][2]']");
    }

    getAddressLine1Field() {
        return cy.get("input[name='wpforms[fields][3][address1]']");
    }

    getAddressLine2Field() {
        return cy.get("input[name='wpforms[fields][3][address2]']");
    }

    getCityField() {
        return cy.get("input[name='wpforms[fields][3][city]']");
    }

    getZipCodeField() {
        return cy.get("input[name='wpforms[fields][3][postal]']");
    }

    getStateSelect() {
        return cy.get("select[name='wpforms[fields][3][state]']");
    }

    getCommentField() {
        return cy.get("textarea[name='wpforms[fields][6]']");
    }

    getItemLabel(item) {
        return cy.contains(`${item}`);
    }

    getSubmitButton() {
        return cy.get("button[name='wpforms[submit]']");
    }

    sendOrder(order) {
        this.getFirstNameField().type(order.first_name);
        this.getLastNameField().type(order.last_name);
        this.getEmailField().type(order.email);
        this.getPhoneField().type(order.phone);
        this.getAddressLine1Field().type(order.address_line1);
        this.getAddressLine2Field().type(order.address_line2);
        this.getCityField().type(order.city);
        this.getZipCodeField().type(order.zip_code);
        this.getStateSelect().select(order.state);
        this.getItemLabel(order.item).click();
        this.getCommentField().type(order.comment);
        this.getSubmitButton().click();

        return this;
    }

    getSuccessMessage() {
        return cy.get("div[id='wpforms-confirmation-24']").children("p");
    }
}
  
export default BillingOrderPage;