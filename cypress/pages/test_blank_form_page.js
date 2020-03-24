class TestBlankFormPage {
    getFirstNameField() { return cy.get("input[name='wpforms[fields][0][first]']"); }
    
    getLastNameField() { return cy.get("input[name='wpforms[fields][0][last]']"); }

    getEmailField() { return cy.get("input[name='wpforms[fields][1]']"); }

    getCommentField() { return cy.get("textarea[name='wpforms[fields][2]']"); }

    getSubmitButton() { return cy.get("button[name='wpforms[submit]']"); }

    getSuccessMessage() { return cy.get("div[id='wpforms-confirmation-16']").children("p"); }

    sendForm(form) {
        this.getFirstNameField().type(form.first_name);
        this.getLastNameField().type(form.last_name);
        this.getEmailField().type(form.email);
        this.getCommentField().type(form.comment);
        this.getSubmitButton().click();

        return this;
    }
}
  
export default TestBlankFormPage;