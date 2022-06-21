/*Ejercicio de Funciones:
Haz un Semáforo.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.
Extra 01: Hacer el semáforo con HTML y CSS
Reto: Hacer que se cambie de forma automática de color */



const semaforo = ["rojo", "amarillo", "verde"];

for (let i = 0; i < semaforo.length; i++){

}


function changeColor(newColor) {
    var elem = document.getElementById('rojo');
    var elem = document.getElementById('amarilla');
    var elem = document.getElementById('verde');
    elem.style.color = newColor;
  }


  //setInterval(cambiarLuz, 2000);

const colores = {
    verde: "green",
    rojo: "red",
    amarillo: "yellow",
};


  function cambiarLuz () {
    const elem = document.getElementById("rojo");
    elem.setAttribute();
  }
