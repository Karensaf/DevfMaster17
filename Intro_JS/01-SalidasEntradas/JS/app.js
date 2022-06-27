//Formas de Mostrar Datos al Usuario

//1.Console Log
console.log('Hola Mundo'); //Recibe Texto
console.log(1990); //Recibe Numeros
console.log(2 + 4); //Recibe Operaciones
console.log(10<3); //Recibe comparaciones
console.log(3<4);  // true    ESTE ES UN BOOLEANO (TRUE O FLASE)

//2.Document.Write
document.write('Hola Mundo'); //Recibe lo que le mandes

//3.Alert (popup)
alert('Hola Mundo');

/*Solicitar Datos
al Usuario Final*/

//1. Prompt (popup)
prompt('Ingresa tu Nombre');

/*La ejecucion de codigo se realiza
del parentesis mas interior hacia afuera*/
alert(prompt('Ingresa tu edad'));
alert(prompt('Ingresa dos numeros para sumar')); // si pones 2+2 se escribe tal cual porq no es operacion
alert('Hola ' + 'Mundo');  // ES una concatenacion