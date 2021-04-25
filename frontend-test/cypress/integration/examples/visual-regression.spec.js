/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite', function(){

    //This is a test case Login and Logout
    it('Perform valid login and logout', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.percySnapshot('login-page')

        //enter credentials
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()

        //open dashboard
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        cy.percySnapshot('dashboard-page')

        //logout
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.title().should('include', 'Testers Hotel')
    })

})