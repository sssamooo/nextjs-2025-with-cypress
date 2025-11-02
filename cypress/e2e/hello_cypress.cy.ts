describe('Album Catalog - Basic Checks', () => {
  it('opens the homepage', () => {
    cy.visit('/');

    // make this test pass by adding the correct attribute data-cy into your page
    // cy.get('[data-cy="title"]').should('be.visible');
    // cy.get('[data-cy="title"]').should('contain.text', 'Spotify');
  });

  it('displays the site title in the header', () => {
    cy.visit('/');
    cy.get('[data-cy="title"]').should('be.visible');
    cy.get('[data-cy="title"]').should('contain.text', 'Spotify');
  });

  it('shows at least one album card', () => {
    cy.visit('/');
    cy.get('[data-cy="album-card"]').should('have.length.at.least', 1);
  });

  it('album card has a title and author', () => {   // miesto price som dal author
    cy.visit('/');
    cy.get('[data-cy="album-card"]').first().within(() => {
      cy.get('h2').should('be.visible');
      cy.contains('p', 'Author');
    });
  });

  it('has a visible search input on the top', () => {
    cy.visit('/');
    cy.get('[data-cy="search-input"]').should('be.visible');
  });

  it('has a visible search button', () => {
    cy.visit('/');
    cy.get('[data-cy="search-button"]').should('be.visible');
  });

  it('search input is empty by default', () => {
    cy.visit('/');
    cy.get('[data-cy="search-input"]').should('have.value', '');
  });

  it('allows typing into the search input', () => {
    cy.visit('/');
    const search = 'test';
    cy.get('[data-cy="search-input"]').type(search);
    cy.get('[data-cy="search-input"]').should('have.value', search);
  });
});
