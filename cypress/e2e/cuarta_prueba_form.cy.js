describe ("Aprender a interactuar y probar formularios en Cypress.",()=>{
    beforeEach(()=>{
    cy.visit('https://www.selenium.dev/selenium/web/web-form.html')
    })
    it("Se realiza prueba con cy.get(), cy.type(), cy.select(), y cy.clear()",()=>{
cy.get('h1').should('have.text',"Web form");
cy.get('#my-text-id').type("Ingreso texto");
cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("MC");
cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Prueba ingreso info en formulario");
cy.get(':nth-child(1) > :nth-child(3) > .form-control').clear();
cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Prueba ingreso segunda info en formulario");
    })
})