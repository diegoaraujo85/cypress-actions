// App Actions
declare namespace Cypress{
  interface Chainable {
    /**
     * Do the login into application
     * @param username The user's username to login
     * @param password The user's password to login
     */
    login(username:string, password:string): Chainable<Element>;

    /**
     *
     * @param name The name of the author of comment
     * @param email The email of the author of comment
     * @param subject The subject of the comment
     * @param message The message to submit
     */
    submitFeedback(name:string, email:string, subject:string, message:string): Chainable<Element>;

    /**
     *
     * @param seconds Number of seconds to wait
     */
    waitForSeconds(seconds:number): Chainable<Element>;
  }
}

Cypress.Commands.add('login', (username, password)=>{
  cy.get('#user_login').type(username);
  cy.get('#user_password').type(password);
  cy.contains('Sign in').click();
});

Cypress.Commands.add('submitFeedback', (name, email, subject, message)=>{
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.get('#subject').type(subject);
  cy.get('#comment').type(message);
  cy.contains('Send Message').click();
});

Cypress.Commands.add('waitForSeconds', (seconds)=>{
  cy.wait(seconds * 1000);
});
