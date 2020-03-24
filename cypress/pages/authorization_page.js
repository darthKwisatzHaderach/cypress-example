class AuthorizationPage {
    visit(url) {
      cy.visit(url);

      return this
    }

    fillPassword(password) {
        cy.get("input[type='password']").type(password)

        return this
    }

    clickSubmit() {
        cy.contains("Submit").click()

        return this
    }

    authorize(password) {
        this.fillPassword(password)
        this.clickSubmit()

        return this
    }
}

export default AuthorizationPage;