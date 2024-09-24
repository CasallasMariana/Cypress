describe ("Ejercicio con aserciones",()=>{
beforeEach(()=>{
cy.visit('https://example.com/')
})
//Should
it("Se realiza prueba con should, expect, y assert",()=>{
//Verificar que el título de la página sea "Example Domain" 
cy.get('h1').should('have.text',"Example Domain");
cy.get('body > :nth-child(1) > :nth-child(2)').should('be.visible')
//•	Verificar que un elemento está visible:
cy.get('a').should('be.visible')
//•	Verificar que un elemento no existe:
cy.get('.mensaje-error').should('not.exist');
//expect
//cy.get('h1'): Selecciona el elemento h1 de la página.
//.then(($h1) => { ... }): Usamos .then() para acceder al elemento DOM seleccionado ($h1).
//expect($h1.text()).to.equal('Example Domain'): Utilizamos expect() para verificar que el texto del elemento h1 es "Example Domain".
cy.get('h1').then(($h1) => {
    expect($h1.text()).to.equal('Example Domain'); 
})
//Assert
//cy.get('h1'): Selecciona el elemento h1 de la página.
//.then(($h1) => { ... }): Usamos .then() para acceder al elemento DOM seleccionado ($h1).
//assert.equal($h1.text(), 'Example Domain'): Utilizamos assert.equal() para comparar el texto del elemento h1 con el valor esperado "Example Domain".
cy.get('h1').then(($h1) => {
    assert.equal($h1.text(), 'Example Domain');  // Verificamos que el texto del h1 es "Example Domain"
  });
})
})