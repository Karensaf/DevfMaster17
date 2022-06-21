//Global
var hi = "Hi";  //scope-function  //Se lee fuera de los bloques

//scope-bloque
const hola = "Hola";
let bonjour = "Bonjour";

//function      //CHECAR QUE HACE CON CONTS EN LUGAR DE LET, LO Q HACE ES POR EL ESCOPE
function miFunction (){
    console.log(`Hola ${nombre} desde el bloque de función`);
    for (let index = 0; index < 5; index++){
        console.log(index);
        console.log(`Hola ${nombre} desde el for`);

        if (index === 2){
            let genero = "M";
            console.log(`Hola ${nombre} desde el if`);
            console.log(genero);
        }
    }
    console.log(index);
}

//bloque es lo que esta dentro de las llaves {}
// if () {}
// for () {}
// function () {}