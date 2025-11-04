describe('Album Catalog - Interactions', () => {
    it('looks for songs when searching via search bar', () => {
        cy.visit('/');
        const search = 'songs';
        cy.get('[data-cy="search-input"]').type(search);
        cy.get('[data-cy="search-button"]').click();
        cy.url().should('include', `q=${search}`);
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
        const search = 'album';
        cy.get('[data-cy="search-input"]').type(search);
        cy.get('[data-cy="search-button"]').click();
        cy.url().should('include', `q=${search}`);
    });

    it('navigates to author page from album card', () => {
        cy.visit('/');
        cy.get('[data-cy="album-card"]').first().within(() => {
            cy.get('[data-cy="author-link"]').click();
            cy.url().should('include', `/author/`);
        });
    });

    it("no album url shows no album found div", () => {
        cy.visit('/album/50000');
        cy.get('[data-cy="no-album-error"]').should('be.visible')
    });

});
