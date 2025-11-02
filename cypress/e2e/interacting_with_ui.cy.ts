describe('Album Catalog - Interactions', () => {
    it('looks for songs when searching via search bar', () => {
        cy.visit('/');
        const searchTerm = 'songs';
        cy.get('[data-cy="search-input"]').type(searchTerm);
        cy.get('[data-cy="search-button"]').click();
        cy.url().should('include', `q=${searchTerm}`);

    });

    it('navigates to the first album detail', () => {
        cy.visit('/');
        cy.get('[data-cy="album-detail-button"]').first().click();
        cy.url().should('include', '/album/1');
    });

    it('navigates to home page after clicking on Spotify logo', () => {
        cy.visit('/')
        cy.get('[data-cy=title]').click();
        cy.url().should('include', '/')
    });

    it('searches for albums using the search bar', () => {
        cy.visit('/');
        const searchTerm = 'album';
        cy.get('[data-cy="search-input"]').type(searchTerm);
        cy.get('[data-cy="search-button"]').click();
        cy.url().should('include', `q=${searchTerm}`);
    });

    
});
