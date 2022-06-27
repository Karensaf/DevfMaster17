/*  ESPECIFICACIONES
Crear una aplicación donde un usuario sepa si se quiere vacuanr o no
-Mayores de 18 años que reside en un Municipio Norte de país
-Embarazadas mayores de 18 años con más de 9 semanas de gestación
-Personas que cumplen 30 años o más */

//Variables
let nombre;
let edad;
let municipioNorte;
let genero;
let embarazada;
let tiempoGestacion;
let resultado;

//SOLICIATR LOS DATOS
nombre = prompt('Digita tu nombre');
municipioNorte = prompt('¿Resides en un municipio del Norte del país? (Responde si o no)');
edad = Number (prompt('Dijita tu edad'));
genero = prompt('¿Eres hombre o mujer? (Responde hombre o mujer)');

if (municipioNorte.toUpperCase() === "SI" && edad >= 18)
{
    if (genero.toUpperCase() === "MUJER")
    {
        embarazada = prompt('¿Eres una mujer embarazada?(Responde si o no)');
        if (embarazada.toUpperCase() === "SI")
        {
            tiempoGestacion = Number (prompt('¿Cuántas semanas de gestación tienes?'));
            if (tiempoGestacion >= 9 && edad >=30)
            {
                resultado = `Hola ${nombre}, tú SI eres candidata a vacunarte`;
            }
            else
            {
                resultado = `Hola ${nombre}, tú NO eres candidata a vacunarte`;
            }
        }
        else
        {
            if(edad >= 30)
            {
                resultado = `Hola ${nombre}, tú SI eres candidata a vacunarte por ser del tercer piso`;    
            }
            else
            {
                resultado = `Hola ${nombre}, tú NO puedes vacuanarte hasta que llegues al tercer piso `;queueMicrotask
            }
        }   
    }
    else
    {
        if(edad >= 30)
        {
            resultado = `Hola ${nombre}, tú SI eres candidato a vacunarte`;
        }
        else
        {
            resultado = `Hola ${nombre}, tú No eres candidato a vacunarte por que estamos en el tercer piso`;
        }
    }
}
else
{
resultado = `Hola ${nombre}, tú NO eres candidat@ a vacunarte`;
}
document.write(resultado);



