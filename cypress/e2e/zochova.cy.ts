describe('Zochova.sk testing', () => {
  it('should find contact info', () => {
    cy.visit('https://zochova.sk/');
    cy.get('#hamburger').click()
    cy.get('#header a').contains('Kontakt').click()
    cy.get("#pageContent").contains('office@zochova.sk');
  });
});