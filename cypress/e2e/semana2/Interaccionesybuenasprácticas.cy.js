describe("Día1: Manejo de diferentes tipos de elementos",()=>{
beforeEach(()=>{
cy.visit("https://the-internet.herokuapp.com/")
})
it("Listas desplegables (dropdowns)",()=>{
//Se realiza prueba con una lista desplegable seleccionando y validando la opción 1
cy.get('a[href="/dropdown"]').click()
cy.get('h3').should('have.text',"Dropdown List")
cy.get('#dropdown').select('Option 1')
cy.get('#dropdown').should('have.value','1')
})
it("Modal/Ventana emergente",()=>{
//Se ingresa en un móculo en el cual muestra una ventana emergente, se valida que sea visible al usuario
//Se cierra y se vuelve a abrir, también validando que sea visible
//Se valida que los textos sean los que se deben visualizar
cy.get('a[href="/entry_ad"]').click()
cy.get('.modal').should('be.visible');
cy.get('.modal-footer > p').click()
cy.get('#restart-ad').click()
cy.get('.modal').should('be.visible');
cy.get('div[class="modal-title"]').should('be.visible')
cy.get('.modal-title >h3').should('have.text','This is a modal window')
cy.get('div[class="modal-body"]')
cy.get('.modal-body >p').should('have.text',"It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).")
})
it("Ventanas emergentes (pop-ups)tipo alert, confirm, o prompt",()=>{
//1-Se realiza prueba con las alertas, se abre y se acepta la alerta, validando que sea visible y muestre el mensaje correcto
//2-Se realiza prueba con mensajes de confirmación, aceptando el mensaje(Hace falta cuando el usuario da click en cancelar), se valida que muestre el mensaje correcto
//3-Se intenta realizar un ejemplo con los prompt, pero muestra la ventana emergente y no continúa la prueba
cy.get('a[href="/javascript_alerts"]').click()
//1-Alert
cy.get('button[onclick="jsAlert()"]').click()
//cy.on('window:alert'). Esto intercepta la alerta del navegador y la "acepta" automáticamente.
cy.on('window:alert', (str) => {
    expect(str).to.equal('I am a JS Alert');  
cy.get('#result').should('have.text','You successfully clicked an alert')    
  });
//2-Confirm"Aceptar"
cy.get('button[onclick="jsConfirm()"]').click()
cy.on('window:confirm', (str) => {
    expect(str).to.equal('I am a JS Confirm');     
cy.get('#result').should('have.text','You clicked: Ok');      
  });
/*3-PENDIENTE:prompt
cy.get('button[onclick="jsPrompt()"]').click()       
  // Sobrescribe el método prompt en la ventana
  cy.window().then((win) => {
    win.prompt = () => 'Texto automático'; // Sobrescribe prompt para retornar el valor
  });*/
})
it("Interacción con iframes",()=>{
//Se realiza una prueba muy básica con iframe, en la cual solamente se valida que sea visible el iframe y que sean los mensaje correctos
cy.get('a[href="/frames"]').click()
cy.get('a[href="/iframe"]').click()
cy.get('div[aria-label="Close"]').click()
cy.get('h3').should('have.text',"An iFrame containing the TinyMCE WYSIWYG Editor")
cy.get('#mce_0_ifr').should('be.visible')
})
})
