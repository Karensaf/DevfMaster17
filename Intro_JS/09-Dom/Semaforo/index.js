/*Ejercicio del semáforo nueva forma con DOM:
1. Obtener los circulos de semáforo en un array
2. Usar ese array dentro de una función para cambiar el color y recórrelo con un for
3. pistas puden usar: */


const colores = document.getElementsByClassName("circulo");
console.log(document.getElementsByClassName("circulo"));


function semaforo() {
    
}







// const colorApagado = "#ececec";

// const semaforo = {
//   color: "red",
//   luzActual: ROJO,
//   siguienteLuz: "rojo",
//   anteriorLuz: "",
// }

// let { color, siguienteLuz, anteriorLuz, luzActual } = semaforo;

// function cambiarLuz() {
//   switch (luzActual) {
//     case ROJO:
//       color = "green";
//       siguienteLuz = "verde";
//       anteriorLuz = "rojo";
//       luzActual = VERDE;
//       break;
//     case VERDE:
//       color = "yellow";
//       siguienteLuz = "amarillo";
//       anteriorLuz = "verde";
//       luzActual = AMARILLO;
//       break;
//     case AMARILLO:
//       color = "red";
//       siguienteLuz = "rojo";
//       anteriorLuz = "amarillo";
//       luzActual = ROJO;
//       break;
//     default:
//       color = "red";
//       siguienteLuz = "rojo";
//       luzActual = ROJO;
//       break;
//   }

//   const prederLuz = document.getElementById(siguienteLuz);
//   prederLuz.style.backgroundColor = color;

//   const apagarLuz = document.getElementById(anteriorLuz);
//   apagarLuz.style.backgroundColor = colorApagado;
//   /* Es posible agregar un atributo de estilo con un valor a un elemento con setAttribute,
//   pero no se recomienda porque puede sobrescribir las otras propiedades existentes,
//   en el atributo de estilo. */
//   // elem.setAttribute("style", "background-color: red;");
// }

// setInterval(cambiarLuz, 2000);
// // cambiarLuz();