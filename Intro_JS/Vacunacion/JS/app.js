//Variables
let nombreCompleto;
let edad;
let municipioNorte;
let genero;
let tiempoGestacion;
let resultado;

//Solicitar datos
nombreCompleto = prompt('Digita tu nombre completo');
edad = Number (prompt('Dijita tu edad'));
municipioNorte = prompt('¿Resides en un municipio del Norte del país?');
genero = prompt('¿Eres mujer embarazada?');
tiempoGestacion = prompt('¿Cuánto tiempo de gestación tienes?');


if (edad >= 18 && municipioNorte.toLowerCase === 'si' && genero.toLowerCase === 'si'){
    
    resultado = `Hola ${nombreCompleto}, tu erescandidato a vacunarte`;
} else {
    resultado = `Hola ${nombreCompleto},  NO eres candidat a vacunarte`;
};
document.write(resultado);


