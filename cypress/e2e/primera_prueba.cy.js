describe("mi priemera prueba en cypress",()=>{
    beforeEach//es una función que se ejecuta antes de cada prueba (it) en un bloque de pruebas (describe). 
              //Su propósito principal es configurar un estado inicial o realizar acciones repetitivas que deben ocurrir antes de cada prueba individual.
    (() => {
        cy.visit('https://the-internet.herokuapp.com/'); // Comando de Cypress para visitar la URL especificada. 
                                                        //Úsalo para abrir la página de tu aplicación.// Visita la URL antes de cada prueba
      });
    it("debería cargar la página correctamente",()=>{
    cy.contains("Welcome to the-internet");// Busca un elemento que contenga el texto especificado. 
                                            //Útil para verificar la presencia de un texto específico en la página.
    
    });//"it"//Define un caso de prueba individual. 
     //Es una descripción de una acción o funcionalidad específica que se está probando.

it("Encontrar y hacer click en un botón",()=>{
    cy.get(':nth-child(1) > a').contains('A/B Testing').click();//cy.get//Selecciona elementos de la página usando un selector CSS. 
                                //Puedes usarlo para encontrar botones, enlaces, formularios, etc.
                                //.click//Realiza un clic en el elemento seleccionado.

 cy.url().should('include','/abtest');//Verifica que la URL actual incluya la ruta especificada. 
                        //Es útil para comprobar si la navegación después de una acción ha sido exitosa.

})

})//"describe"//Define un conjunto de pruebas relacionadas. 
//En este caso, todas las pruebas relacionadas con la "página de inicio"