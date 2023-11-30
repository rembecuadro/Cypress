context('Example 01', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Test #1', () =>{
        cy.get('.new-todo').type("My long task #1{enter}"); //Recieve a locator
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.contains ('Completed').click();
        cy.contains ('Active').click();
    })

    it('Test #2: Select using CSS selectors', () =>{
        cy.get('.new-todo').type("My long task #1{enter}"); //Recieve a locator
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get (':nth-child(2) > .view > .toggle').click(); // Busca la segunda tarea hija y accede al botón
        cy.contains ('Completed').click();
    })

    it.only('Test #3: Select using Text Contents', () =>{
        cy.get('.new-todo').type("My long task #1{enter}"); // Recieve a locator
        cy.get('.new-todo').type("My long task #2{enter}");
        cy.get ('label:contains("My long task #1")')
        .parent().find('.toggle')                           // Busca la tarea llamada "My long test #1" por texto y luego accede al botón
        .click();
        cy.contains ('Completed').click();
    })
})