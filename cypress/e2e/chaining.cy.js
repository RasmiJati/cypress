/// <reference types= "cypress" />

// it('chaining and retrying', () => {
//     cy.visit('/')
//     cy.contains('[data-cy=card]', 'Jun 26 2024')

//     // command chains to use command in cypress

//     // cy.get().click()  // click is child command (first one) and get is parent comand (second one) and contains is hybrid command that can be used as parent or child based on the behavior where they are starting the chain or are just continuation of chain
//     // cy.get('[data-cy = list]')
//     //     .eq(1)
//     //     .contains('[data-cy=card]', 'Jun 26 2024')

// })




// import { cardsLoadSlowly } from '../../evilCode'
// // it('chaining and retrying', {defaultCommandTimeout: 6000 }, () => {
// it('chaining and retrying', () => {

//     cardsLoadSlowly(3000) // custom function

//     cy.visit('/')

//     // cy.get('[data-cy = card]')
//     // cy.get('[data-cy = card]', { timeout: 60000 })
//     cy.get('[data-cy = card]').last().click()

//     cy.get('[data-cy = card-detail-title]').should('have.value', 'shampoo')

// })




import { cardsLoadRandomly } from '../../evilCode'
// it('chaining and retrying', {defaultCommandTimeout: 6000 }, () => {
it('chaining and retrying', () => {

    cardsLoadRandomly(3000) // custom function

    cy.visit('/')

    // cy.get('[data-cy = card]')
    // cy.get('[data-cy = card]', { timeout: 60000 })
    cy.get('[data-cy = card]')  //query command
    .last()   //query command
    .should('contain.text','shampoo') //assertions command
    .click()  //actions command

    cy.get('[data-cy = card-detail-title]').should('have.value', 'shampoo')

})

