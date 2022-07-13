/*Crea una función llamada longestCountry(), esta función recibirá de parametro un arreglo con nombres de distintos países, la función debera retornar el país con mayor número de letras. 
Toma como ejemplo, del siguirnte arreglo de países:
const paises = ["México","Panamá", "Guatemala", "El Salvador"]  */

function longestCountry(paises){
    var longest = paises[0];
    for (var i = 0; i < paises.length; i++) {
        if (paises[i].length > longest.length){
            longest = paises[i];
        }
    }
    return longest; 
}
console.log(longestCountry(["México", "Panamá","Estados Unidos", "Guatemala", "El Salvador"]));
