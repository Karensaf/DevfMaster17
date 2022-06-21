//Función que cuente el número de vocales que hay en un string(cadena de caracteres);

const vocales = ["a", "e", "i", "o", "u"];
const miNombre = "Karen Arteaga Franco"

miNombre.length //longitud
miNombre[0] //K



const contarVocales = function(string) {
    let contadorDeVocales = 0;
    const arregloDeMiNombre = string.split("");
    console.log("INICIO", arregloDeMiNombre.length, "FIN");

    for(let i = 0; i < arregloDeMiNombre.length; i++){
        if (vocales.includes(arregloDeMiNombre[i])) {
            contadorDeVocales++;
            //contadorDeVocales = contadorDeVocales + 1;
        };
    }
    return  contadorDeVocales;
};

const misVocales = contarVocales("Karen Arteaga Franco");
console.log(misVocales);