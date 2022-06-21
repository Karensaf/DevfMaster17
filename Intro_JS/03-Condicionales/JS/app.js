// Primer paso: DEFINIR LAS VARIABLES
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;
let resultado;

//Segundo paso: SOLICITAR LOS DATOS
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = Number (prompt('Digita el año actual'));
anioNacimiento =  Number (prompt('Digita el año de tu nacimiento'));

//Tercer paso: DESARROLLO DE LA LOGICA
/*if (typeof(anioActual) === 'number' && typeof(anioNacimiento) ==='number'){
    edad = anioActual - anioNacimiento;
    resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`;
} else {
    resultado = 'Porfavor ingresa años validos';
}
*/

//q no hay NAN dentro

if(isNaN(anioActual) || isNaN(anioNacimiento))
{
    resultado = 'Porfavor ingresa años validos';
}
else
{
    edad = anioActual - anioNacimiento;
    resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`;
    
}

//Cuarto paso: MOSTRAR LOS RESULTADOS
;
document.write(resultado);  
