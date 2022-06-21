const gato = {
    nombre: "Alfa",
    alias: "peluchin",
    apodo: "gato bola",
    raza: "Siames",
    edad: 6,
    color: ["blanco", "gris"],
    vacunas: {
        tripefelina: true,
        rabia: false,
    },
};

//console.log(gato.edad);
//console.log(gato["edad"]);

//PREGUNTAR

//console.log(gato.vacunas.tripefelina.toUpperCase());  //"true"
//console.log(gato?.vacunas?.influenza?.toUpperCase());


//DESTRUSTURACIÓN

const {nombre, alias, apodo, raza, edad, color, vacunas} = gato;

console.log(nombre);
console.log(alias);
console.log(apodo);
console.log(raza);
console.log(edad);
console.log(color);
console.log(vacunas);



//Es lo mismo q la linea de arriba con cada uno
/*
const nombre = gato.nombre;
const alias = gato.alias;
const apodo = gato.apodo;
const raza = gato.raza;
const edad = gato.edad;
const color = gato.color;
const vacunas = gato.vacunas;


console.log(nombre);
console.log(alias);
console.log(apodo);
console.log(raza);
console.log(edad);
console.log(color);
console.log(vacunas);
*/
/*
console.log(gato.nombre);
console.log(gato.alias);
console.log(gato.apodo);
console.log(gato.raza);*/

const miArray = ["satring", 4, [], {}];

//arregloDeString
//const razas = ["siames", "bengala", "carrey","persa", "bombay", "egipcio"];

//arregloDeNumeros
//const pesos = [4,4,5,6,3,];