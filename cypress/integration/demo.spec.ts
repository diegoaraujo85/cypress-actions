describe('Demo test', () => {
  it('Should visit a website', () => {
    cy.visitLoginPage();
    cy.waitForSeconds(5)
    cy.login('username', 'password');
  });

  it('Should login using fixture', () => {
    cy.visitLoginPage();
    cy.fixture('loginData').then(({username, password}) => {
      cy.login(username, password);
    });
  });
});



