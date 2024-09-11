/// <reference types = "cypress" />
it('making assertions', () =>{
    cy.visit('/')
    // cy.get('[data-cy=new-card]')
    //     .click()

    // cy.get('[data-cy="new-card-input"]')
    //     .type('bread{enter}')

    // cy.get('[data-cy="card"]')
    //     .should('be.visible')     
        
    // cy.get('[data-cy="card"]')
    //     .should('have.length',2)       //why use length not count or sth else because whenever we use get to find element in page , cypress is going to create an array of elements 


    // test checkbox

    // cy.get('[data-cy = "card-checkbox"]').click()
    // cy.get('[data-cy = "card-checkbox"]').check()
    // // cy.get('[data-cy = "card-checkbox"]').uncheck()
    // cy.get('[data-cy = "card-checkbox"]').should('be.checked')
    // cy.get('[data-cy = "due-date"]').should('have.class','completed')

    cy.get('[data-cy = "list-name"]').should('have.text','groceries')
    

})