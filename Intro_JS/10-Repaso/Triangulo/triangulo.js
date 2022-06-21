
const entre = 2

function calcularArea(base, altura) {
    return base * altura/ entre;
    
}

console.log(calcularArea(4,2));    
console.log(calcularArea(6,2));   //YA  FUNCIONA
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