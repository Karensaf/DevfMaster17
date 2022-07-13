//Declaracion la funcion ---- Function declaration
/*function saludar() {
    console.log('Hola Karen');
};

saludar();
*/   //Primer ejemplo

saludar('Karen', 'Arteaga', 'Franco'); //Mandas llamar y das valores

function saludar(nombre, apellidoPaterno, apellidoMaterno) {
    console.log(`Hola ${apellidoPaterno} ${apellidoMaterno} ${nombre}`);
};


//Expreción de función ---- function expression
const saludar2 = function (aPaterno, aMaterno, name){
    console.log(`Hola ${aPaterno} ${aMaterno} ${name} `);
};
var nombreCompleto = saludar2 ("Lizeth", "Jiménez", "Arteaga")


//var saludar = function () {};


//const saludar = () => {};