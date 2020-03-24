/// <reference types="Cypress" />
import AuthorizationPage from '../pages/authorization_page';
import TestBlankFormPage from '../pages/test_blank_form_page';

describe('Form tests', function() {
  const forms = require('../fixtures/forms.json');

  forms.forEach((form) => {
    it(`Send form. ${form.test_name}`, () => {
      const expected_text = 'Thanks for contacting us! We will be in touch with you shortly.';
      const authorization_page = new AuthorizationPage();
      const test_blank_form_page = new TestBlankFormPage();
      
      authorization_page
        .visit('/test-blank-form/')
        .authorize('Testing');

      test_blank_form_page.sendForm(form);

      test_blank_form_page
        .getSuccessMessage()
        .should('have.text', expected_text);
    })
  })

  it('Form validation test', () => {
    const error_class = 'wpforms-error';
    const authorization_page = new AuthorizationPage();
    const test_blank_form_page = new TestBlankFormPage();
    
    authorization_page
      .visit('/test-blank-form/')
      .authorize('Testing');

    test_blank_form_page.getFirstNameField().should('not.have.class', error_class)
    test_blank_form_page.getLastNameField().should('not.have.class', error_class)
    test_blank_form_page.getEmailField().should('not.have.class', error_class)
    test_blank_form_page.getCommentField().should('not.have.class', error_class)

    test_blank_form_page.getSubmitButton().click();

    test_blank_form_page.getFirstNameField().should('have.class', error_class)
    test_blank_form_page.getLastNameField().should('have.class', error_class)
    test_blank_form_page.getEmailField().should('have.class', error_class)
    test_blank_form_page.getCommentField().should('have.class', error_class)
  })
})