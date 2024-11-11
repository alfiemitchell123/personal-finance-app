// cypress/e2e/auth.cy.ts

describe("Authentication Tests", () => {
    it('should register and login a user', () => {
        // Visit login page
        cy.visit('/login');

        // Click the sign up link
        cy.contains('Sign Up').click();

        // Register a new user
        cy.get('input[type="text"]').type("New User");
        cy.get('input[type="email"]').type("user@example.com");
        cy.get('#password').type("password123");
        cy.get('button[type="submit"]').click();

        // User should be redirected to the index page
        cy.url().should('include', '/');
    });
})