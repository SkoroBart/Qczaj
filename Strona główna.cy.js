/// <reference types="cypress" />


describe("E2E - Strona glowna Qczaj", () => {
    it("Elementy na stronie głównej", () => {

        //otwieranie strony głównej
        cy.visit(Cypress.env("url"));
        cy.wait(500);

        //akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true}); 

        cy.wait(500);

        //pobieranie górnego paska
        cy.get("#overDiv");

        //pobieranie elementów głównego menu
        cy.get("ul.insideNav__menu")
        .find("li").then(li => {
           expect(li).to.have.length(8);
        });

            //Klasyczna
            cy.get('.insideNav__menu > .for-menu_diet > .active')
            .should('contain', 'Klasyczna')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Wegetariańska
            cy.get('.insideNav__menu > .for-qczaj_vege > a')
            .should('contain', 'Wegetariańska')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Low carb
            cy.get('.insideNav__menu > .for-qczaj_low_carb > a')
            .should('contain', 'Low carb')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Dla Dwojga
            cy.get('.insideNav__menu > .for-qczaj_for_two > a')
            .should('contain', 'Dla Dwojga')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //menuPAUZA
            cy.get('.insideNav__menu > .for-menupauza > a')
            .should('contain', 'menuPAUZA')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Wyzwania
            cy.get('.insideNav__menu > .for-qczaj_wyzwania > a')
            .should('contain', 'Wyzwania')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Cennik
            cy.get('.insideNav__menu > .for-qczaj_cennik > a')
            .should('contain', 'Cennik')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

            //Kalkulator kalorii
            cy.get('.insideNav__menu > .for-qczaj_calculator > a')
            .should('contain', 'Kalkulator kalorii')
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


        //pobieranie loga
        cy.get(".insideNav__logo")
        .invoke("attr", "href")
        .then(link => {
            cy.log(link);
        });

        //pobieranie buttona "Zaloguj"
        cy.get(".insideNav__favourites-menu")
        .find("a")
        .should("contain", "Zaloguj")
        .invoke("attr", "href").then(link => {
            cy.log(link)
        });

        //pobieranie głównych sekcji strony
        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .then(section => {
            expect(section).to.have.length(10)
        });

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(0)
        .should("have.class", "section__1-intro");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(1)
        .should("have.class", "section__2-why-diet");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(2)
        .should("have.class", "section__3-what-for");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(3)
        .should("have.class", "section__4-what-will-get");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(4)
        .should("have.class", "section__5-how-work");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(5)
        .should("have.class", "section__6-challenges");


        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(6)
        .should("have.class", "section__7-food")
        .find(".section-box")
        .find("a")
        .should("contain", "Przykładowe diety 1800 kcal")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(7)
        .should("have.class", "section__8-effects");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(8)
        .should("have.class", "section__9-contact");

        cy.get('[class="qczaj-view qczaj-diet"]')
        .find(".qczaj-classic-offer")
        .find("section")
        .eq(9)
        .should("have.id", "opinion");


        //pobieranie buttonów kierujących do cennika
        cy.get('[class="btn-buy"]')
        .should("contain", "Kup plan diety online");

        //pobieranie stopki
        cy.get("footer")
        .parents(".v4-wrapper", "qczaj")
        .find("footer");

    })
});