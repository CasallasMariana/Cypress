describe("Ejemplo de práctica con uso de selectores y comandos.",()=>{
beforeEach(()=>{
cy.visit('https://todomvc.com/examples/javascript-es5/dist/')
})
it("Se realiza prueba con type,click,check y uncheck",()=>{
cy.get('.new-todo').type('Prueba1{enter}');
cy.get('.new-todo').type('Prueba2{enter}');//Escribir texto en un campo de entrada.
cy.get('.filters > :nth-child(2) > a').click()//Hacer clic en un elemento.
cy.get('.selected').click()
cy.get('input[type="checkbox"]').eq(1).check();//Marcar una casilla de verificación.
cy.get('input[type="checkbox"]').eq(1).check();
cy.get('.filters > :nth-child(3) > a').click()
cy.get('input[type="checkbox"]').eq(2).uncheck()//Desmarcar una casilla de verificación.

})

})