describe('Validar que ingrese a la pantalla de registro usuario', () => {
    it('Sing Up', () => {
      cy.visit('https://test-qa.inlaze.com/auth/sign-in')//Ingreso a la página
      cy.get('.text-center > .font-bold').click();//Dar clic en sign Up
      cy.get('.text-4xl').should('be.visible');//validar el texto"Sign Up"
      cy.get(':nth-child(1) > .label > .label-text').should('be.visible');
      cy.get('#full-name').type('Catañeda');
      cy.get(':nth-child(2) > .label > .label-text').should('be.visible');
      cy.get('#email').type('Martha1222@hotmail.com');
      cy.get(':nth-child(3) > .label > .label-text').should('be.visible');
      cy.get('.join > #password').type('Martha123');
      cy.get(':nth-child(4) > .label > .label-text').should('be.visible');
      cy.get('.join > #confirm-password').type('Martha123');
      cy.get(':nth-child(3) > .ng-untouched > .join > .btn').click();
      cy.get('.mb-4 > .join > .btn').click();
      cy.get(':nth-child(3) > .ng-untouched > .join > .btn').click();
      cy.get('.mb-4 > .join > .btn').click();
      cy.get('[type="submit"]').click();
      cy.get('.ml-3').should('be.visible');
      cy.get('.ml-4').click();
      //prueba para el sign in
      cy.get('.text-4xl').should('be.visible');
      cy.get('.form-control.w-full > .label > .label-text').should('be.visible');
      cy.get('#email').type('Martha1222@hotmail.com');
      cy.get('.mb-4 > .label > .label-text').should('be.visible');
      cy.get('.join > #password').type('Martha123');
      cy.get('.join > .btn').click();
      cy.get('.join > .btn').click();
      cy.get('[type="submit"]').click();
      //Validar que se visualicen los mensajes de la pantalla principal.
      cy.get('.text-xl').should('be.visible');
      cy.get('.font-extrabold').should('be.visible');
      cy.get('.max-w-lg').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('img').click();
    
    })
  })