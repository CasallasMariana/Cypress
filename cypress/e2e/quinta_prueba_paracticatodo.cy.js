describe("Prueba completa en la que se combina todo lo aprendido anteriormente",()=>{
beforeEach(()=>{
cy.visit("https://www.selenium.dev/selenium/web/web-form.html") 
})

it("Se va a realizar la prueba con un envío de formulario poniendo en práctica todos los comandos aprendidos", () => {
  
    // Verificar que el encabezado h1 tiene el texto correcto
    cy.get('h1').should('have.text', "Web form");
    
    // Escribir en el campo de texto
    cy.get('#my-text-id').type('Practica');
    
    // Escribir en el campo de contraseña
    cy.get('input[name="my-password"]').type('MC');
    
    // Limpiar el campo de contraseña y escribir nuevamente
    cy.get('input[name="my-password"]').clear().type('MC123');
    
    // Escribir en el área de texto
    cy.get('textarea[name="my-textarea"]').type('Ingreso texto de prueba en el formulario');
    
    // Verificar que el campo deshabilitado está visible y contiene el texto correcto
    cy.get('input[name="my-disabled"]').should('be.visible').and('have.attr', 'placeholder', 'Disabled input');
    
    // Verificar que el campo deshabilitado está efectivamente deshabilitado
    cy.get('input[name="my-disabled"]').should('be.disabled');
    
    // Verificar que el campo de solo lectura está visible y contiene el texto correcto
    cy.get('input[name="my-readonly"]').should('have.value', 'Readonly input');
    
    // Verificar que el campo de solo lectura está efectivamente configurado como solo lectura
    cy.get('input[name="my-readonly"]').should('have.attr', 'readonly');

    //Selccionar una opción del menú desplegable}
    cy.get('select[name="my-select"]').select('Three');

    //Verificar que si esté seleccionada la opcion 3
    cy.get('select[name="my-select"]').should('have.value','3');

    //Escribir y seleccionar una opcion
    cy.get('input[name="my-datalist"]').type('Seattle').click()

    //Seleccionar la opción de subir un archivo
    cy.get('input[name="my-file"]').click()

    //Dar click en los checkBox
    cy.get('#my-check-1').click()
    cy.get('#my-check-2').click()

    //Dar click en los checkradio
    cy.get('#my-radio-1').click()
    cy.get('#my-radio-2').click()
    
    //Enviar el formulario
    cy.get('button[type="submit"]').click()

    //Validar que se visualicen los mensajes correctos
    cy.get('h1[class="display-6"]').should('have.text','Form submitted')
    cy.get('#message').should('have.text',"Received!")
  });
})