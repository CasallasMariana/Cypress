describe("Ejemplo de práctica con uso de selectores y comandos.",()=>{
beforeEach(()=>{
cy.visit('https://todomvc.com/examples/web-components/dist/')
})
it("Escribir texto en un campo de entrada.",()=>{
cy.get('input[id="new-todo"]').type('Prueba1{enter}')
cy.get('input[id="new-todo"]').type('Prueba2{enter}')
})

it("Hacer clic en un elemento.",()=>{
cy.get('a id="filter-link-active"').click()
})

it("Marcar una casilla de verificación.",()=>{
cy.get('input[type="checkbox"]').first().check();
cy.get('input[type="checkbox"]').eq(1).check();
})

it("Desmarcar una casilla de verificación.",()=>{
cy.get('input[type="checkbox"]').eq(1).uncheck()
})

})