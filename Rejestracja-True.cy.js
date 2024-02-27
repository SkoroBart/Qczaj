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

        cy.get("#email").type("przykladowy@test.pl");

        cy.get("#email_repeat").type("przykladowy@test.pl");

        cy.get("#password").type("przykladoweHaslo1");

        cy.get(".agreements")
        .find("input")
        .should("have.length", "6")
        .then(checkbox => {
            cy.get(checkbox).eq(1).check({force: true})
            cy.get(checkbox).eq(2).check({force: true})
        });

        cy.contains('[type="submit"]', ' Zarejestruj się ');
        
    })
})