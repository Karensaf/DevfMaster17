// Primer paso: DEFINIR LAS VARIABLES
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;

//Segundo paso: SOLICITAR LOS DATOS
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = prompt('Digita el año actual');
anioNacimiento = prompt ('Digita el año de tu nacimiento');

//Tercer paso: DESARROLLO DE LA LOGICA
/*edad = anioActual - anioNacimiento;*/
edad = Number(anioActual) - Number(anioNacimiento);

//Cuarto paso: MOSTRAR LOS RESULTADOS

document.write('Hola ' + nombreCompleto + ', tu edad apróximada es ' + edad);  
