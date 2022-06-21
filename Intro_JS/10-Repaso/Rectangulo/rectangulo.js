

                   //dentro de los parentesis van parametros
function calcularArea(base, altura) {
    return base * altura;
}

console.log(calcularArea(4,4));    
console.log(calcularArea(5,6));   //YA  FUNCIONA
console.log(calcularArea(3,8));



function obtenerArea() {
    //const area = calcularArea(base, altura);  //???

    const ladoA = document.getElementById("base");
    //ladoA.style.color = "red";
    const valorDeLaBase = Number(ladoA.value);

    const ladoB = document.getElementById("altura");
    const valorDeLaAltura = ladoB.value;
    
    const area = calcularArea(Number(valorDeLaBase), Number(valorDeLaAltura));

    const elementoArea = document.getElementById('area');
    elementoArea.value = area;




}