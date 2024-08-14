INSTRUCCIONES PARA TENER CYPRESS.

NOTA: Previamenete se debe tener instalado un editor de código como visual studio code y NodeJs

1.Inicializar el proyecto:

Comando: npm init
 ![image](https://github.com/user-attachments/assets/ada7eb81-865c-4ab8-8d14-693c43b28c02)
2.Ingresar los datos del proyecto:
 ![image](https://github.com/user-attachments/assets/a89e10ea-5dbe-4557-9359-3369acddbc34)
3.Instalar cypress en el proyecto

Comando: npm install cypress --save-dev 
![image](https://github.com/user-attachments/assets/3bf3f29f-f753-468e-812c-c92ddbb75422)
4.En el package.jason agregar el script: "cy:open": "cypress open"
 ![image](https://github.com/user-attachments/assets/a407c54b-318e-4897-b623-71280aaf7317)
5.Correr el comando. 
Comando: npm run cy:open
![image](https://github.com/user-attachments/assets/f78efb4a-58c6-4899-a47f-d787670899ae)
6.Al correr el comando nos debe aparecer la ventana de cypress ”tests runners” como la siguiente 
 ![image](https://github.com/user-attachments/assets/ae1efc80-ffd6-402f-b3a3-c2ed7aec88c5)
7.Seleccionar E2E Testing
![image](https://github.com/user-attachments/assets/2c1cff7b-580f-4816-b0c1-f2b7e80ceb63)
8.Seleccionar el navegador para correr las pruebas y dar clic en running Chrome 
![image](https://github.com/user-attachments/assets/e0694a0e-7794-4fed-8eab-0acb8b9b47f0)
9.Esto va a instalar el módulo de cypress en visual:
 ![image](https://github.com/user-attachments/assets/99ec43f2-4b75-4e26-9f54-0c2e7a410416)
10.Para crear un nuevo test seleccionamos la carpeta e2e y damos clic en New File
![image](https://github.com/user-attachments/assets/55ae7e08-d40c-4627-af88-791fb818cf5b)
11.Agregamos el nombre del test y agregamos al final .cy.js
![image](https://github.com/user-attachments/assets/d8fa0ce6-59f3-4c97-947e-8220ba3a048d)

INSTRUCCIONES PARA CORRER LOS TEST.

1.Clonar el repositorio.
![image](https://github.com/user-attachments/assets/04c6d8e4-20b1-43d7-8e93-df8cc5ab5a4b)
![image](https://github.com/user-attachments/assets/5a6b1787-8901-43ff-bafe-95b02974b07e)
2.Abrir el repositorio en el editor de código.
![image](https://github.com/user-attachments/assets/73424882-688d-457b-b1ef-a4e747497eab)
![image](https://github.com/user-attachments/assets/bbe585f9-fcbd-4326-ab88-f750ee5b0073)
3.Abrir la terminal y escribir el comando.

Comando: npm run cy:open
![image](https://github.com/user-attachments/assets/e4e64590-37fb-478e-a43c-cf5b20952f93)

4.Al correr el comando, nos va a aparecer la ventana de cypress.
![image](https://github.com/user-attachments/assets/9dc3c9ba-227a-4e7a-827f-7115296f34ad)
5.Seleccionamos E2E Testing.
![image](https://github.com/user-attachments/assets/76fdf900-3891-4710-82c7-74cca9c7d36b)
6.Seleccionamos el navengador para correr las pruebas y damos clic en start E2E Testing.
![image](https://github.com/user-attachments/assets/17fb52d6-3d42-430b-b3dc-680abe80d3a7)
7.Nos va a aparecer una ventana con los test que se tienen hasta el momento.
![image](https://github.com/user-attachments/assets/70c53366-8b9d-4479-a8e1-16ee35e21e5e)
8.Seleccionamos el test y automáticamente empieza a correr el test.
![image](https://github.com/user-attachments/assets/e75f7b99-f1f9-4d45-8a9e-73d2b7fcf293)
9.Al finalizar, vamos a poder observar si pasó o no el test.
![image](https://github.com/user-attachments/assets/afbeb177-978b-4ca5-8a46-1f393e039b7e)










