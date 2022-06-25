describe('Feedback tests', () => {
  it('Should visit feedback page and write a comment', () => {
    cy.visitFeedbackPage();
    cy.fixture('feedbackData').then(({name, email, subject, message}) => {
      cy.submitFeedback(name, email, subject, message);
    });
  });
});
