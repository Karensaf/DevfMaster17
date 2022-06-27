// Primer paso: DEFINIR LAS VARIABLES
// let nombreCompleto;
let anioActual, anioNacimiento;//se pueden declarar dos variables en una sola limea con una COMA(,)
let edad;

//Segundo paso: SOLICITAR LOS DATOS
let nombreCompleto = prompt('Digita tu nombre completo'); // se puede declarar en una sola linea o por separado como los otros dos
anioActual = prompt('Digita el año actual');
anioNacimiento = prompt ('Digita el año de tu nacimiento');

//Tercer paso: DESARROLLO DE LA LOGICA
/*edad = anioActual - anioNacimiento;*/
edad = Number(anioActual) - Number(anioNacimiento);  //el numbrer ocnvierte a numeros lo q metan

//Cuarto paso: MOSTRAR LOS RESULTADOS

document.write('Hola ' + nombreCompleto + ', tu edad apróximada es: ' + edad); 
// document.write(`Hola ${nombreCompleto}  tu edad aproximada es:   ${edad} `);  //otra opcion de pedirlo


                        // TEORIA

//STRINGS

let string = 'soy un string';
console.log(string);

//NUMEROS   NAN si no es un numero va a salir esto
let  suma = 2 + "4"; // se concatena no se suma
console.log(suma);

//BOOLEANO 
var comparacion = 2 > 3;
console.log(comparacion);   //te dice si es verdadera o falsa la informacion

//VALOR NULL
var miVariable = null;
console.log(miVariable); //manda el null de respuesta porq es su valor 

//UNDEFINED
var saludo;
console.log(typeof saludo);  //q es saludo un string, un numero o  q? pero como no esta definido es un undefine

//OBJETO Permite almacenar varia informacion en poco espacio
var persona = {
    nombre: "Karen",
    edad: "32",
    ciudad: "México",
    mascota: "Tezqui",       //Puedes poner la informacion quieras
    hijos: "3",
    hermanos: "2",
};
console.log(persona.hijos) //entra al objeto y te trae lo q quieres de ese objeto

// TYPEOF  es para ver el tipo de dato de una variable en especifico
let nombre; //undefined         //son los resultados en consola
typeof(nombre);  //undefined
nombre = "Karen";               //por eso se dice que JS es un lenguaje debilmente tipado
typeof(nombre); //string
nombre = 5;
typeof(nombre); //number
nombre = true;
typeof(nombre); // boolean

