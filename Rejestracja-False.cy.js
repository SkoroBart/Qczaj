/// <reference types="cypress" />

describe("E2E - Logowanie na NSD", () => {
    it("Logowanie na konto", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(500);

        cy.get(".JS-rodo-button-text")
        .click({force: true});

        cy.wait(500);

        cy.on("window:confirm", () => true);

        cy.get('.insideNav__favourites-menu > .for-sign-in > a')
        .should("contain", "Zaloguj")
        .click();

        cy.get('.create-account > a')
        .should("contain", "Załóż konto")
        .click ();

        cy.get('[class="JS-form-submit-button"]')
        .click ();
    })
})