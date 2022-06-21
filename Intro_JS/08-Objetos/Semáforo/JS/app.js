const colores = {
    GREEN: "green",
    RED: "red",
    YELLOW: "yellow",
};


   
// const colores = ["green", "red", "yellow"];

/* const colores = {
  verde: "green",
  rojo: "red",
  amarillo: "yellow",
}; */

// const ROJO = 3;
// const AMARILLO = 2;
// const VERDE = 1;

const colorApagado = "#ececec";
let color;
let luzActual = -1;
let siguienteLuz;
let anteriorLuz;


function cambiarLuz() {
  switch (luzActual) {
    case colores.RED:
      color = "green";
      siguienteLuz = "verde";
      anteriorLuz = "rojo";
      luzActual = colores.GREEN;
      break;
    case colores.GREEN:
      color = "yellow";
      siguienteLuz = "amarillo";
      anteriorLuz = "verde";
      luzActual = colores.YELLOW;
      break;
    case colores.YELLOW:
      color = "red";
      siguienteLuz = "rojo";
      anteriorLuz = "amarillo";
      luzActual = colores.RED;
      break;
    default:
      color = "red";
      siguienteLuz = "rojo";
      luzActual = colores.RED;
      break;
  }

  const prederLuz = document.getElementById(siguienteLuz);
  prederLuz.style.backgroundColor = color;

  const apagarLuz = document.getElementById(anteriorLuz);
  apagarLuz.style.backgroundColor = colorApagado;
  /* Es posible agregar un atributo de estilo con un valor a un elemento con setAttribute,
  pero no se recomienda porque puede sobrescribir las otras propiedades existentes,
  en el atributo de estilo. */
  // elem.setAttribute("style", "background-color: red;");
}

setInterval(cambiarLuz, 2000);
// cambiarLuz();