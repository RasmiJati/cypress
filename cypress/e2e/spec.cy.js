it('submit form data', () => {
  // cy.visit('https://cypress.io')
  // cy.visit('https://applitools.com')
  // cy.visit('https://rasmijati.com.np')
  cy.visit('/')
  /* ==== Generated with Cypress Studio ==== */
  // cy.get('.fadeInDown').click();
  // cy.get('#name').clear('test');
  // cy.get('#name').type('test');
  // cy.get('#email').clear('test@gmail.com');
  // cy.get('#email').type('test@gmail.com');
  // cy.get('#subject').clear('testing');
  // cy.get('#subject').type('testing');
  // cy.get('#comment').click();
  // cy.get('.contact-btn').click();
  /* ==== End Cypress Studio ==== */

  // cy.get('.fadeInDown')  // select the element
  // cy.contains('HELLO')

  cy.get('#name').type('new test{enter}')
  // cy.get('#email').type('wmail@gmail.com{enter}')  // enter will enter after typing
  cy.get('#email').type('wmail@gmail.com')  // enter will enter after typing
  // cy.contains('Submit').click()
  })

  // test
  it.only('new test', ()  =>{  //run this test only because of only
    cy.visit('/');
    cy.get('.navbar-toggle').click()
    // cy.get('.navbar-toggle').first().click({force: true})
    cy.get('.nav > :nth-child(2) > a')
  })

  