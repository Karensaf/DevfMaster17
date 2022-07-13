/*
1.-Solocitar los nombres completos de la familia separados po (,)
2.-Convertir esos nombres a un arraye nombres de familia y mostrar en la consola.
3.- Combinar los 2 arrays en uno solo y reordenarlo de atras hacia adelante.
4.-Agregar las validaciones q creas necesarias*/
let arrayReto1 = [];
let arrayReto2 = [];
let arrayReto3 = [];
let arrayReto4 = [];
let arrayReto5 = [];


arrayReto1 = prompt('Ingresa integrante 1').split(' ');
arrayReto2 = prompt('Ingresa integrante 2').split(' ');
arrayReto3 = prompt('Ingresa integrante 3').split(' ');
arrayReto4 = prompt('Ingresa integrante 4').split(' ');
arrayReto5 = prompt('Ingresa integrante 5').split(' ');

console.log(arrayReto1, arrayReto2, arrayReto3, arrayReto4, arrayReto5)

let arregloNombresSeparados = arrayReto1.concat(arrayReto2, arrayReto3, arrayReto4, arrayReto5);
console.log(arregloNombresSeparados);

arrayOrdenado = arregloNombresSeparados.sort();
console.log(arrayOrdenado);

let arregloNombresPila = arrayReto1[0]+' , '.concat(arrayReto2[0]+' , ', arrayReto3[0]+' , ', arrayReto4[0]+' , ', arrayReto5[0]+' , ').split(' , ');
console.log(arregloNombresPila); 

let arrayReversa = arregloNombresPila.reverse();
console.log(arrayReversa); 

arregloNombresPila.sort();
console.log(arregloNombresPila);

let todoJuntos = arregloNombresPila.concat(arregloNombresSeparados);
console.log(todoJuntos);