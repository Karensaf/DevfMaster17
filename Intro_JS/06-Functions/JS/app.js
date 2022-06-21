//Declaracion la funcion ---- Function declaration
/*function saludar() {
    console.log('Hola Karen');
};

saludar();
*/
function saludar(nombre, apellidoPaterno, apellidoMaterno) {
    console.log(`Hola ${apellidoPaterno} ${apellidoMaterno} ${nombre}`);
};

saludar('Karen', 'Arteaga', 'Franco');



//Expreción de función ---- function expression
var saludar = function () {};