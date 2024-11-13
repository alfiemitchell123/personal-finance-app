describe("Login Tests", () => {
    it("should login successfully", () => {
        cy.visit("/login");

        cy.get("input[type='email']").type("user@example.com");
        cy.get('input[type="password"]').type("password123");
        cy.get('button[type="submit"]').click();

        cy.url().should('not.include', '/login');
        cy.get("h1").should("contain", "Overview");
    })
})