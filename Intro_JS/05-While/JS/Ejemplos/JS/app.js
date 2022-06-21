/*Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */
/*
let contador = 0;
let numeroLimite;

numeroLimite = Number (prompt('Dime el número q más te guste'));

for (let index = 1; index <= numeroLimite; index++) {
    if(index % 5 === 0){
        console.log(index);
    }
}*/

/*Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */

/*
let primerNumero;
let segundoNumero;

primerNumero = Number (prompt('Digita un número del 1 hasta el 50'));
segundoNumero = Number (prompt('Digita otro número del 1 hasta el 50'));

for (let index = 1; index <= 50; index++){
    console.log(index);
    if (index === primerNumero || index === segundoNumero){
        console.log(index + '¡¡¡Loteria!!');
    }
    
}
*/
/*Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales. */

//resultado = `Hola $ {nombreCompleto}, tu erescandidato a vacunarte`;

let primerNumero;
let segundoNumero;
let tercerNumero;

primerNumero = Number (prompt('Escribe un número'));
segundoNumero = Number (prompt('Escribe otro  número'));
tercerNumero = Number (prompt(' Y por último escribe otro  número'));


if (primerNumero < tercerNumero && segundoNumero < tercerNumero  ){
    console.log(`El ${tercerNumero}, es el mayor`);
    if(tercerNumero < primerNumero && segundoNumero < primerNumero){
        console.log(`El ${primerNumero}, es el mayor`);
    }
}
else{
    
}
