// cypress/e2e/auth.cy.ts

describe("Authentication Tests", () => {
    it('should register and login a user', () => {
        // Visit registration page
        cy.visit('/register');

        // Register a new user
        cy.get('input[type="email"]').type("user@example.com");
        cy.get('#password').type("password123");
        cy.get('#confirmPassword').type("password123");
        cy.get('button[type="submit"]').click();

        // User should be redirected to the index page and welcome message should be shown
        cy.url().should('include', '/');
        cy.contains('Welcome, user@example.com!').should('be.visible');

        // Log out
        cy.contains('Sign Out').click();

        // Visit the login page
        cy.visit('/login');

        // Log in with the registered user
        cy.get('input[type="email"]').type("user@example.com");
        cy.get('input[type="password"').type("password123");
        cy.get('button[type="submit"]').click();

        // User should be redirected to the index page and welcome message should be shown
        cy.url().should('include', '/');
        cy.contains('Welcome, user@example.com!').should('be.visible');
    })
})