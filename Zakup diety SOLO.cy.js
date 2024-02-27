/// <reference types="cypress" />


describe("E2E - Zakup diety solo", () => {
    it("Proces zakupu", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(1000);

        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Pobranie i kliknięcie w zakładkę Cennik
        cy.get('.insideNav__menu > .for-qczaj_cennik > a')
        .should("contain", "Cennik")
        .and("have.attr", "href")
        .then(link => {
            cy.log(link)
        });

        cy.get('.insideNav__menu > .for-qczaj_cennik > a')
        .click(); 

        //Elementy cennika
            //Header
            cy.get(".qczaj-price-list__header")
            .find(".qczaj-price-list__container")
            .find("h1")
            //.should("contain", "Wybierz dietę i sposób płatności");

            //Rodzaj diet - nawigacja
            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .then(a => {
                expect(a).to.have.length(5)
            });

            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .eq(0)
            .should("contain", "Klasyczna")
            .and("have.attr", "data-version")
            .then(version => {
                expect(version).to.have.contain("std")
            });

            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .eq(1)
            .should("contain", "Wegetariańska")
            .and("have.attr", "data-version")
            .then(version => {
                expect(version).to.have.contain("vege")
            });

            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .eq(2)
            .should("contain", "Low Carb")
            .and("have.attr", "data-version")
            .then(version => {
                expect(version).to.have.contain("lowCarb")
            });

            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .eq(3)
            .should("contain", "menuPAUZA")
            .and("have.attr", "data-version")
            .then(version => {
                expect(version).to.have.contain("menopause")
            });

            cy.get('[class="qczaj-price-list__navigation-tabs"]')
            .find(".qczaj-price-list__container")
            .find("a")
            .eq(4)
            .should("contain", "Dla Dwojga")
            .and("have.attr", "data-version")
            .then(version => {
                expect(version).to.have.contain("couple")
            });
           

        //Kliknięcie w "Wybieram"  w zakładce "Klasyczna" 1 miesiąc
        cy.get(".qczaj-price-list__container")
        .find('[class="plan JS-plan  is-first"]')
        .find('[class="qczaj-price-list__button JS-choose-button"]')
        .should("contain", "Wybieram")
        .eq(0)
        .click();


        //Pobieranie elementów koszyka

        //1.Może Cię także zainteresować
        cy.get('[class="your-order__choose-additions payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Może Cię także zainteresować");


        //2.Akceptujemy
        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find(".payments__section-title")
        .should("contain", "Akceptujemy");

        cy.get('[class="your-order__payment-type-info payments__section"]')
        .find("ul")
        .then(ul => {
            expect(ul).to.have.length(2)
        });

        //3.Najczęściej zadawane pytania
        cy.get('[class="your-order__faq payments__section"]')
        .find(".JS-toggle-faq-a")
        .then(p => {
            expect(p).to.have.length(3)
        });

        //4.Przycisk "Cofnij"
        cy.get('p[class="payments__go-back"]')
        .find("a")
        .should("contain", "Cofnij");

        //5.Kod rabatowy
        cy.get('.your-order__promo-code');


        //6.Podsumowanie
        cy.get("#shoppingBasket")
        .should("contain", "Podsumowanie")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .click({force: true});

        //Logowanie na konto
        cy.get('[class="payments__custom-button payments__custom-button--bordered JS-toggle-login-button"]')
        .should("contain", "Zaloguj się")
        .click({force: true});

        cy.wait(500);

        cy.get("#login").type("testowe_qczaj_nsd");
        cy.get("#password").type("Takie#Latwe4");
        
        cy.get(".JS-form-submit-button")
        .first()
        .should("contain", "Zaloguj")
        .click({force: true});

        //Pobieranie elementów zakładki "Płatność"

        //Nawigacja
        cy.get(".payments__navigation")
        .find("li")
        .then(li => {
            expect(li).have.to.length(2)
        });

        //Forma płatności
        cy.get(".payments__section-title")
        .should("contain", "Wybierz formę płatności");

        cy.get('[class="payment-method__choose-method payments__section"]')
        .find(".JS-main-form ")
        .find('[class="payment-methods-wrap JS-payment-method"]')
        .find(".payment-item")
        .then(item => {
            expect(item).have.to.length(34)
        });

        //PayPo
        cy.contains('[class="pay-po-title"]', 'Nie masz pieniędzy w tym momencie? Kup teraz, zapłać później z PayPo');

        //Checkbox
        cy.get(".payments__custom-input")
        .find("input")
        .then(checkbox => {
            cy.get(checkbox).check({force: true})
        });

        //Podsumowanie
        cy.get("#shoppingBasket")
        .find(".head")
        .should("contain", "Podsumowanie");

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find('p[class="name"]');

        cy.get("#shoppingBasket")
        .find(".body")
        .find(".package")
        .find(".flex-wrap")
        .find("p")
        .then(p => {
            expect(p).have.to.length(2)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".total")
        .find("p")
        .then(p => {
            expect(p).have.to.length(4)
        });

        cy.get("#shoppingBasket")
        .find(".foot")
        .find(".security-info")
        .find('i[class="fas fa-lock"]')
        
        cy.get("#shoppingBasket")
        .find(".foot")
        .find('[class="payments__custom-button JS-validate-radios"]')
        .should("contain", "Zapłać")
        .click();


        //Walidacja
        cy.get('[class="JS-error-mf error"]')
        .should("contain", "Proszę wybrać jedną z metod płatności");


        //Wybór metody płatności
        cy.get(".payment-item")
        .eq(2)
        .trigger("focus")
        cy.get('img[src="https://static.przelewy24.pl/payment-form-logo/svg/222"]')
        .click();

        //Kliknięcie w "Zapłać"
        cy.get('[class="payments__custom-button"]')
        .first()
        .should("contain", "Zapłać")
        .click({force: true});

    })
})