/// <reference types="cypress" />


describe("E2E - Kliknięcie w zakładkę Cennik", () => {
    it("Otwarcie Cennika", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(500);
        
        //Akceptowanie ciasteczek
        cy.get(".JS-rodo-button-text")
        .click({force: true});

        //Kliknięcie w Cennik
        cy.get(".insideNav__menu > .for-qczaj_cennik > a")
        .should("contain", "Cennik")
        .click();

        //Elementy cennika
            //Header
            cy.get("h1")
            //.should("contain", "Wybierz dietę i sposób płatności");


            //Nawigacja - zakładki
            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .then(a => {
                expect(a).to.have.length(5)
            });

            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(0)
            .should("contain", "Klasyczna");

            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(1)
            .should("contain", "Wegetariańska");

            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(2)
            .should("contain", "Low Carb");

            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(3)
            .should("contain", "menuPAUZA");

            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(4)
            .should("contain", "Dla Dwojga");

            

            //Plany diet w zakładce "Klasyczna"
            //1 Miesiąc
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="1"]')
            .find('p[class="duration"]')
            .should("contain", "1 miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(0)
            .should("contain", "Subskrypcja")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7837)
            });

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(1)
            .should("contain", "Jednorazowo")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7585)
            });
            
            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > [data-type="standard"]');

            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //2 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="2"]')
            .find('p[class="duration"]')
            .should("contain", "2 miesiące");
            
            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="2"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="2"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            

            //3 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="3"]')
            .find('p[class="duration"]')
            .should("contain", "3 miesiące");
            
            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="3"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="3"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //6 Miesiący
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="6"]')
            .find('p[class="duration"]')
            .should("contain", "6 miesięcy");
            
            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="6"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="6"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //Kliknięcie w zakładkę "Wegetariańska"
            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(1)
            .click();

            //Plany diet w zakładce "Wegetariańska"
            //1 Miesiąc
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="1"]')
            .find('p[class="duration"]')
            .should("contain", "1 miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(0)
            .should("contain", "Subskrypcja")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7837)
            });

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(1)
            .should("contain", "Jednorazowo")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7585)
            });
            
            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > [data-type="standard"]');

            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //2 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="2"]')
            .find('p[class="duration"]')
            .should("contain", "2 miesiące");
            
            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="2"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="2"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            

            //3 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="3"]')
            .find('p[class="duration"]')
            .should("contain", "3 miesiące");
            
            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="3"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="3"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //6 Miesiący
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="6"]')
            .find('p[class="duration"]')
            .should("contain", "6 miesięcy");
            
            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="6"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="6"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //Kliknięcie w zakładkę "Low Carb"
            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(2)
            .click();

            //Plany diet w zakładce "Low Carb"
            //1 Miesiąc
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="1"]')
            .find('p[class="duration"]')
            .should("contain", "1 miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(0)
            .should("contain", "Subskrypcja")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7837)
            });

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(1)
            .should("contain", "Jednorazowo")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7585)
            });
            
            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > [data-type="standard"]');

            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //2 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="2"]')
            .find('p[class="duration"]')
            .should("contain", "2 miesiące");
            
            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="2"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="2"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            

            //3 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="3"]')
            .find('p[class="duration"]')
            .should("contain", "3 miesiące");
            
            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="3"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="3"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //6 Miesiący
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="6"]')
            .find('p[class="duration"]')
            .should("contain", "6 miesięcy");
            
            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="6"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="6"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });



            //Kliknięcie w zakładkę "menuPAUZA"
            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(3)
            .click();

            //Plany diet w zakładce "menuPAUZA"
            //1 Miesiąc
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="1"]')
            .find('p[class="duration"]')
            .should("contain", "1 miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(0)
            .should("contain", "Subskrypcja")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7837)
            });

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(1)
            .should("contain", "Jednorazowo")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7585)
            });
            
            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > [data-type="standard"]');

            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //2 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="2"]')
            .find('p[class="duration"]')
            .should("contain", "2 miesiące");
            
            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="2"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="2"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            

            //3 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="3"]')
            .find('p[class="duration"]')
            .should("contain", "3 miesiące");
            
            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="3"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="3"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //6 Miesiący
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="6"]')
            .find('p[class="duration"]')
            .should("contain", "6 miesięcy");
            
            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="6"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="6"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });



            //Kliknięcie w zakładkę "Dla Dwojga"
            cy.get(".qczaj-price-list__navigation-tabs > .qczaj-price-list__container")
            .find("a")
            .eq(4)
            .click();

            //Plany diet w zakładce "Dla Dwojga"
            //1 Miesiąc
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="1"]')
            .find('p[class="duration"]')
            .should("contain", "1 miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(0)
            .should("contain", "Subskrypcja")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7837)
            });

            cy.get('[data-version="std"][data-duration="1"] > .tablet-layout-wrap > .type-tabs')
            .find("p")
            .should("have.length", "2")
            .eq(1)
            .should("contain", "Jednorazowo")
            .and("have.attr", "data-id")
            .then(id => {
                expect(id).to.contain(7585)
            });
            
            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > [data-type="standard"]');

            cy.get('[data-version="std"][data-duration="1"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="1"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });


            //2 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="2"]')
            .find('p[class="duration"]')
            .should("contain", "2 miesiące");
            
            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="2"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="2"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="2"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            

            //3 Miesiące
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="3"]')
            .find('p[class="duration"]')
            .should("contain", "3 miesiące");
            
            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="3"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="3"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="3"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });
            


            //6 Miesiący
            cy.get(".qczaj-price-list__box")
            .find('[data-version="std"][data-duration="6"]')
            .find('p[class="duration"]')
            .should("contain", "6 miesięcy");
            
            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > p');

            cy.get('[data-version="std"][data-duration="6"] > .price-per-month > .for-month-label')
            .should("contain", "za miesiąc");

            cy.get('[data-version="std"][data-duration="6"] > :nth-child(3)');

            cy.get('[data-version="std"][data-duration="6"] > .qczaj-price-list__button')
            .should("contain", "Wybieram")
            .and("have.attr", "href")
            .then(link => {
                cy.log(link)
            });

    })
})