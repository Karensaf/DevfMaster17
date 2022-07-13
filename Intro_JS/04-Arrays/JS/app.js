//Variables

let miArray = [];  //Es un arreglo vacio

// let miArray = [a]; //puede tener algo
// let miArray = [0,1,2,3,4,5,6,...n]; 
// let miArray = [hotdog]; 
// [0] = h
// [3] = d

// Mostrar cantidad de elementos del arreglo
console.log(miArray.length);

//Agregamos valores al array

miArray.push(prompt('Ingresa el nombre de una fruta')); //Añade elementos al final
console.log(miArray);
miArray.push(prompt('Ingresa el nombre de otra fruta'));
console.log(miArray);

//Agregar un elemento al inicio del array  osea a la posiscion 0
miArray.unshift('Mandarina');
console.log(miArray);

//Eliminar el último elemento

miArray.pop();
console.log(miArray);


//Eliminar el primer elemento osea el de la posicion 0

miArray.shift();
console.log(miArray);

//Extraer palabras de un string y convertirlas en un array

let nombreCompleto = 'Mauricio Alexander Lopero Rivera';
console.log(nombreCompleto);
let arregloNombre = nombreCompleto.split(' ');
//let arregloNombre = nombreCompleto.split('a');  //separa en las a
console.log(arregloNombre);

//Eliminar elementos de un array a partir de su indice
arregloApellidos = arregloNombre.slice(2);
//console.log(arregloNombre);
console.log(arregloApellidos);
let arregloPrimerApellido = arregloNombre.slice(2,2);
console.log(arregloPrimerApellido);


//Agregar elementosal arrayn una posicion especifica y remplazari queremos
let arregloCualquierCosa = arregloApellidos.splice(1,1, nombreCompleto);
console.log(arregloCualquierCosa);

arregloApellidos.splice(1,0, arregloNombre);
console.log(arregloApellidos);

//Ordenar los elementos de un array alfabeticamente

let arrayOrdenado = arregloNombre.sort();
console.log(arrayOrdenado);

//Voltea el arreglo, de reversa
arrayOrdenado.reverse();
console.log(arrayOrdenado);

let arregloConatenado = arregloNombre.concat(arrayOrdenado, arregloApellidos);
console.log(arregloConatenado);