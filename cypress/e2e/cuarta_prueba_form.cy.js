describe ("Aprender a interactuar y probar formularios en Cypress.",()=>{
    beforeEach(()=>{
    cy.visit('https://www.selenium.dev/selenium/web/web-form.html')
    })
    it("Se realiza prueba con cy.get(), cy.type(), cy.select(), y cy.clear()",()=>{
cy.get('h1').should('have.text',"Web form");//Asegurar que el títullo exista
cy.get('#my-text-id').type("Ingreso texto");//Ingresar la infromación en el nombre
cy.get(':nth-child(1) > :nth-child(2) > .form-control').type("MC");//ingresar la información en la contraseña
cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Prueba ingreso info en formulario");//ingresar información en el campo de texto
cy.get(':nth-child(1) > :nth-child(3) > .form-control').clear();//Borrar la información del campo
cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Prueba ingreso segunda info en formulario");//ingresar información en el campo de texto
cy.get('select[name="my-select"]').select('Two')//Buscar el menu desplegable y dat click en la segunda opcion
cy.get('select[name="my-select"]').should('have.value', '2')//Asegurarse de que se selccionó la opción correcta 
cy.get('.btn').click()//Enviar el formulario
cy.get('.display-6').should('have.text',"Form submitted")//Asegurar que después de enviar el formulario, se visulizan los mensajes
cy.get('#message').should('have.text',"Received!")//Asegurar que después de enviar el formulario, se visulizan los mensajes
})
})