// cypress/e2e/app.cy.ts

describe("Application Test", () => {
    beforeEach(() => {
        // Visit login page
        cy.visit('/login');

        cy.get('input[type="email"]').type("user@example.com");
        cy.get('#password').type("password123");
        cy.get('button[type="submit"]').click();
    })

    it('should go to the transactions page, and add a new transaction', () => {
        // Visit the transactions page
        cy.visit('/transactions');

        // Wait for transactions content to load
        cy.get('.css-18qbnhe', { timeout: 10000 }).should('be.visible');

        // Add a new transaction
        cy.contains('+ Add New Transaction').click();
        cy.get('input[type="text"]').type("Test Transaction");
        cy.get('button[id="menu-button-:r1l:"]').click();
        cy.contains("Entertainment").click();
        cy.get('input[type="number"]').type("100");
        cy.get('button[type="button"]').click();

        // Transaction should be added
        cy.contains('Test Transaction').should('be.visible');
    });
})