describe('Prueba de interceptación simulada de solicitud GET', () => {
    it('Debe interceptar una solicitud GET y devolver una respuesta simulada', () => {
      // Simulamos la respuesta de la solicitud GET
      cy.intercept('GET', '**/api/v1/decision/**', {
        statusCode: 200,
        body: { message: 'Respuesta simulada exitosa' },
      }).as('getAd');
  
      // Visitamos la página que genera la solicitud
      cy.visit('https://jsonplaceholder.typicode.com/');
  
      // Esperamos que la solicitud interceptada se complete
      cy.wait('@getAd').then((interception) => {
        // Verificamos que el código de estado sea 200
        expect(interception.response.statusCode).to.eq(200);
  
        // Verificamos que el cuerpo de la respuesta contenga la clave "message"
        expect(interception.response.body).to.have.property('message', 'Respuesta simulada exitosa');
      });
    });
  });
  