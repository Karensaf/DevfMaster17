/*Crea una funcion llamada farenheitToCelcius() que reciba como parametros los grados farenheit y los convierta a grados centigrados */
function convertirFarenheit1(gradosFarenheit) {
    var celsius= (gradosFarenheit - 32) * (5/9);
    console.log(celsius)
}
convertirFarenheit1(50);

// Azucar sistetica                         //Math.floor es para redondear al nunero entero mas bajo  
const convertirFarenheit = gradosFarenheit => Math.floor((gradosFarenheit - 32) * (5/9));
console.log(convertirFarenheit(54))