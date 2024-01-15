describe('Checking a class on a selected element', () => {


it('Check a value from the input', () => {

cy.visit('https://google.com');

cy.get('#autoCompleteButton').should('have.class', 'onSearchClick');


})

})