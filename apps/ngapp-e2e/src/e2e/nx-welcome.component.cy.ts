describe('ngapp', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('path-imports-nx-welcome').should('exist');
  });
});
