// Primer paso: DEFINIR LAS VARIABLES
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;
let resultado;

//Segundo paso: SOLICITAR LOS DATOS
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = Number (prompt('Digita el año actual')); //poner desde aqui el number lo convierte en numero automaticamente
anioNacimiento =  Number (prompt('Digita el año de tu nacimiento'));

//Tercer paso: DESARROLLO DE LA LOGICA           
/*if (typeof(anioActual) === 'number' && typeof(anioNacimiento) ==='number'){   //con esta validacion nos leia cualquier caracter como numero aunq no  fuera numero
    edad = anioActual - anioNacimiento;
    resultado = `Hola ${nombreCompleto}, tu edad aproximada es: ${edad}`;
} else {
    resultado = 'Porfavor ingresa años validos';
}
*/

//q no hay NAN dentro

if(isNaN(anioActual) || isNaN(anioNacimiento)) //si no es u numero ninguna de las dos entra al if, si no entra al esle
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



//IF 
if (10 > 3) console.log('Es correcto')

var edaad = 32;
if (edaad >= 18)console.log('Ya eres mayor de edad')  //sin llaves
else console.log('aún eres un mocoso');

if (edaad >= 18){
    console.log('Ya eres mayor de edad')       //con llaves
}    else { console.log('aún eres un mocoso')
};

//IF CON VARIAS SENTENCIAS
if (5 < 2){
    console.log('Es correcto');
}else console.log('no es correcto');