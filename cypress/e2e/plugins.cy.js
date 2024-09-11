// it('plugins', () => {
//     cy.visit('/')

//     cy.eyesOpen()  // to start visual testing

//     cy.eyesCheckWindow() // to make snapshot

//     cy.eyesClose() // to stop visual testing
// })

beforeEach(() => {
    cy.eyesOpen()
    appName: 'Trello app'
     //get applitools api key by signing in to applitools
})


it('plugins', () => {
    cy.visit('/')

    cy.get('[data-cy = board-item]') .should('be.visible') // guarding assertions

    cy.eyesCheckWindow() // to make snapshot


})

afterEach(() => {
    cy.eyesClose() // to stop visual testing
})