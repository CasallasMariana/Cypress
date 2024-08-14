describe('Validar que realiza el login correctamente', () => {
    it('Sign in', () => {
      cy.visit('https://test-qa.inlaze.com/auth/sign-in')
      cy.get('.text-4xl').should('be.visible');
      cy.get('.form-control.w-full > .label > .label-text').should('be.visible');
      cy.get('#email').type('Martha1222@hotmail.com');
      cy.get('.mb-4 > .label').should('be.visible');
      cy.get('.join > #password').type('Martha123');
      cy.get('.fa-solid').click();
      cy.get('[type="submit"]').click();
    //Validar que ingrese a la pantalla principal.
    cy.url().should('include', 'https://test-qa.inlaze.com/panel');
    //Validar que se visualicen los mensajes de la pantalla principal.
      cy.get('.text-xl').should('be.visible');
      cy.get('.font-extrabold').should('be.visible');
      cy.get('.max-w-lg').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('img').click();
    //Realizar el cierre del login
      cy.contains('a', 'Logout').click();
    //Validar que si está en la pantalla de Sign In.
      cy.url().should('include', 'https://test-qa.inlaze.com/auth/sign-in');
      cy.get('.text-4xl').should('be.visible'); 

    })
  })