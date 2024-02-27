/// <reference types="cypress" />

describe("E2E - Logowanie na NSD", () => {
    it("Logowanie na konto", () => {
        cy.visit(Cypress.env("url"));

        cy.wait(500);
       
        //Akceptowanie ciasteczek
       cy.get(".JS-rodo-button-text")
       .click({force: true});

       cy.wait(500);

       //Pobranie i kliknięcie w "Zaloguj"
       cy.get(".insideNav__favourites-menu").find("a")
       .should("contain", "Zaloguj")
       .click ({force: true});

       //Wpisywanie danych
       cy.get("#login")
       .type("testowe_qczaj_nsd");

       cy.get("#password")
       .type("Takie#Latwe4");

       //Logowanie
       cy.get(".JS-form-submit-button")
       .click ();


       //MOJE KONTO PO ZALOGOWANIU
       //Moja dieta
       cy.get(".row")
       .find("li")
       .eq(0)
       .should("have.class", "col-md-12 col-lg-6")
       .find("h3")
       .should("contain", "Moja dieta");
   
       cy.get(".row")
       .find("li")
       .eq(0)
       .find("p")
       //.should("contain", "Mój jadłospis, lista zakupów, postępy, mój dietetyk i ustawienia diety.");

       cy.get(".row")
       .find("li")
       .eq(0)
       .find("a")
       .should("contain", "Przejdź")
       .and("have.attr", "href")
       .then(link => {
        cy.log(link)
        });


       //Wyzwania
       cy.get(".row")
       .find("li")
       .eq(1)
       .should("have.class", "col-md-12 col-lg-6")
       .find("h3")
       .should("contain", "Wyzwania");
   
       cy.get(".row")
       .find("li")
       .eq(1)
       .find("p")
       //.should("contain", "Moje zadania od Qczaja do wykonania.");

       cy.get(".row")
       .find("li")
       .eq(1)
       .find("a")
       .should("contain", "Przejdź")
       .and("have.attr", "href")
       .then(link => {
        cy.log(link)
        });

       //Ustawienia konta
       cy.get(".row")
       .find("li")
       .eq(2)
       .should("have.class", "col-md-12 col-lg-6")
       .find("h3")
       .should("contain", "Ustawienia konta");
   
       cy.get(".row")
       .find("li")
       .eq(2)
       .find("p")
       //.should("contain", "Moje dane, ustawienia e-mail, zmiana hasła i usunięcie konta.");

       cy.get(".row")
       .find("li")
       .eq(2)
       .find("a")
       .should("contain", "Przejdź")
       .and("have.attr", "href")
       .then(link => {
        cy.log(link)
        });

       //Płatności
       cy.get(".row")
       .find("li")
       .eq(3)
       .should("have.class", "col-md-12 col-lg-6")
       .find("h3")
       .should("contain", "Płatności");
   
       cy.get(".row")
       .find("li")
       .eq(3)
       .find("p")
       //.should("contain", "Informacja o abonamentach, historia płatności.");

       cy.get(".row")
       .find("li")
       .eq(3)
       .find("a")
       .should("contain", "Przejdź")
       .and("have.attr", "href")
       .then(link => {
        cy.log(link)
        });


       //Przejście do jadłospisu
       cy.get('.insideNav__favourites-menu > :nth-child(1) > .h-far')
       .should("have.attr", "href")
       .then(link => {
        cy.log(link)
        });

       cy.get('.insideNav__favourites-menu > :nth-child(1) > .h-far')
       .click();

   
       //Zamknięcie okienka OnBording
       cy.get(".onboarding-close > .far")
       .click();
   
       //Submenu
       cy.get('[class="JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("li")
       .should("have.length", "4");
   
       cy.get('[class="JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("li")
       .eq(0)
       .should("have.class", "dayView el-0")
       .and("contain", "Jadłospis");
   
       cy.get('[class="JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("li")
       .eq(1)
       .should("have.class", "dayView el-1")
       .and("contain", "Lista zakupów");
       
       cy.get('[class="JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("li")
       .eq(2)
       .should("have.class", "dayView el-2")
       .and("contain", "Postępy");
   
       cy.get('[class="JS-breadcrumbsSubmenu submenu-for-diet"]')
       .find("li")
       .eq(3)
       .should("have.class", "dayView el-3")
       .and("contain", "Ustawienia");
   
   
       //Postępy
       cy.get(".progress-bar-container")
       .find("h3")
       .should("contain", "Postępy");
   
       //Kalorie
       cy.get('[class="date-menu-box"]')
       .find("h3");
   
       //Kalendarz
       cy.get(".calendar")
       .find(".calendar-container")
       .find('[class="calendar-navigation-week left"]')
       .click();
   
       cy.get(".calendar")
       .find(".calendar-container")
       .find('[class="calendar-navigation-week right"]')
       .click();
   
   
       //Pobieranie kontenera menu
       cy.get(".diet-menu-day__menu")
       .find(".menu-container");
   
       //Top bar pierwszego posiłku, kalorie i kliknięcie w "Dodaj"
       cy.get(".diet-menu-day__menu")
       .find(".top-bar")
       .eq(0)
       .find(".top-bar__actions")
       .find(".top-bar__calorie");
   
       cy.get(".diet-menu-day__menu")
       .find(".top-bar")
       .find(".top-bar__actions")
       .eq(0)
       .find(".button-base-plus")
       .find('[class="fas fa-plus"]')
       .click();
   
       //cy.wait(1000);
   
       //Zamykanie okienka informacyjnego class="tm-modal"
       cy.get(".tm-modal")
       .find('[class="tm-button standard-button"]', 'Zamknij')
       .click();
   
       //cy.wait(2000);
   
       //Zamykanie okienka reklamowego
       //cy.get('[class="root page-1 page-last"]')
       //.find(".container")
       //.find(".close")
       //.click({force: true});
   
   
       //Pobieranie modułu dodawania produktu/potrawy z elementami
       cy.get(".meal-exchange-scroll-content")
       .find(".meal-exchange-header")
       .find(".diet-menu-day-app__checkbox")
       .find(".label-text")
       .should("contain", "Dodaj do śniadań w całym tygodniu");
   
       cy.get("#exchange_in_whole_week")
       .then(checkbox => {
         cy.get(checkbox)
         .check({force: true})
       });
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .should("have.length", "5");
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(0)
       .should("contain", "Szukaj");
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(1)
       .should("contain", "Ulubione")
       .click();
   
       cy.wait(500);
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(2)
       .should("contain", "Ostatnio używane")
       .click();
   
       cy.wait(500);
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(3)
       .should("contain", "Własne")
       .click();
   
       cy.wait(500);
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(4)
       .should("contain", "Zero waste")
       .click();
   
       cy.wait(500);
   
       cy.get(".meal-exchange-menu")
       .find(".meal-exchange-menu-container")
       .find("button")
       .eq(0)
       .should("contain", "Szukaj")
       .click();
   
   
       cy.get("#search_input_text");
   
       cy.get(".input-container")
       .find('[class="fas fa-search"]');
   
       cy.get('[class="meal-exchange-search-box search-input"]')
       .find(".placeholder")
       .should("contain", "Wpisz nazwę potrawy lub składniki po przecinku");
   
       cy.get(".meal-exchange-search__navigation");
   
       cy.get(".meal-exchange-heading")
       .find(".diet-menu-day-app__button-go-back")
       .click();
   
   
       //Sprawdzanie elementów modułu karty posiłku
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".item-container")
       .find(".item")
       .find(".meal-header-container")
       .find(".meal-image")
       .find(".dish-preparation-icon-type");
   
   
       //Pobieranie tytułu posiłku z przyciskiem 
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-title")
       .find(".meal-title__button");
   
       //Ranking potrawy
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-title")
       .find(".meal-rating");
   
       //Pobieranie przycisków akcji na posiłku
       cy.get(".menu-container")
       .find(".meal")
       .eq(1)
       .find(".meal-actions-container")
       .find("button")
       .then(button => {
        expect(button).to.have.length(4)
        });
   
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(0)
        .should("contain", "Wymień");
   
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(1)
        .should("contain", "Lubię");
   
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(2)
        .should("contain", "Nie lubię");
   
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-actions-container")
        .find("button")
        .eq(3)
        .should("contain", "Usuń");
        
        //Pobieranie sekcji składników z przyciskami
        cy.get(".meal-servings")
        .eq(1)
        .find(".meal-serving-box")
        .then(box => {
            expect(box).to.have.length(2)
       })
   
        .find("p")
        .then(p => {
            expect(p).to.have.length(5)
       });
   
       cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-ingredients")
        .find(".meal-editing-portion-scale")
        .find(".pencil-button");
   
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-ingredients")
        .find('a[class="white standard-button edit-button"]')
        .should("contain", "Edytuj składniki");
   
        //Przepis
        cy.get(".menu-container")
        .find(".meal")
        .eq(1)
        .find(".meal-preparation-steps");
   
   
    //Pobieranie modułu nawodnienia
    cy.get(".diet-menu-day__water-needed")
    .find(".water-needed-container")
    .find(".water-condition")
    .should("contain", "Nawodnienie");
   
    
    cy.get(".diet-menu-day__water-needed")
    .find(".water-needed-container")
    .find(".water-condition-box")
    .find("button")
    .then(button => {
        expect(button).to.have.length(2)
        });
   
   
    //Pobieranie wykresu makroskładników
    cy.get(".nutrients-pie-chart");
   
    //Rozwijanie szczegółów makroskładników
    cy.get(".nutrients-more-details")
    .click();
   
    //Mój dietetyk + przycisk
    cy.get(".diet-menu-day__dietitian-actions")
    .find(".dietitian-button")
    .should("contain", "Wyślij wiadomość");
   
    //Pobieranie submenu z przyciskami
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .then(button => {
        expect(button).to.have.length(4)
        });
    
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(0)
    .should("contain", "Jadłospis w PDF");
   
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(1)
    .should("contain", "Lista ulubionych potraw");
   
    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(2)
    .should("contain", "Widok całego tygodnia");

    cy.get(".submenu-actions-container")
    .find('[class="standard-button submenu-actions-link"]')
    .eq(3)
    .should("contain", "Pomiary");
   

   })
 });