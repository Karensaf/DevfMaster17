/*Crea una funcion llamada palindrome() que reciba como parametro una palabra,si la oración es un palindromo la funcion se devera devolver true en otro caso false
Extra con oraciones */

function palindrome(palabra) {
    console.log(palabra)
    var resultado = palabra
    console.log(resultado)
    var palabraOriginal = palabra.toLowerCase();
    console.log(palabraOriginal)
    var letras = palabraOriginal.split("");
    console.log(letras)
    var letrasReves = palabraOriginal.split("").reverse();
    console.log(letrasReves)
    var unirPalabra = letrasReves.join("");
    console.log(unirPalabra);
    for(i in resultado)
  if(palabraOriginal === unirPalabra) {
    console.log(`${palabra} si es un palindrome`);
    console.log("true")
  }
  else {
    console.log(`${palabra} NO es un palindrome`);
    console.log("false")
  }

}

palindrome("Ojo")
palindrome("Ojos")





function palindrome1(string) {
  let palabra1 = string.toLowerCase('');
  let palabra2 = string.split('').reverse().join('').toLowerCase('');
  if (palabra1 === palabra2) {
    return `${string} SI es u palindrome`
  }else {
    return `${string} NO es u palindrome`
  }
}

console.log(palindrome1("Pasto"));
console.log(palindrome1("Anitalavalatina"));
