let panelInicio, panelRondas;      //Así están en el scope global en este documento (en este archivo)
let jugador1,jugador2;
let rondas = 0;

function iniciar(){
    // let panelInicio = document.getElementById('inicio');
    // let panelRondas = document.getElementById('rondas');
    panelInicio = document.getElementById('inicio');
    panelRondas = document.getElementById('rondas');
    // let jugador1 = document.getElementById('jugador1').value;   //Capturar el elmento 8NOMBRE DEL JUGADOR) con el value se guarda el nombre
    // let jugador2 = document.getElementById('jugador2').value;

     //Cambiamos los estilos de los paneles para mostrar u ocultar

    jugador1 = document.getElementById('jugador1').value;   
    jugador2 = document.getElementById('jugador2').value;

    panelInicio.classList.remove('visible');
    panelInicio.classList.add('invisible');

    panelRondas.classList.remove('invisible');
    panelRondas.classList.add('visible');

    //CARGAR PANEL DEL JUGADOR 1
    document.getElementById('tituloJ1').innerText='Turno del Jugador ' + jugador1;
    document.getElementById('tituloJ2').innerText='Turno del Jugador ' + jugador2;

    document.getElementById('respuestaJ1').classList.remove('invisible');
    document.getElementById('respuestaJ1').classList.add('visible');

    //Incremento del contador rondas
    rondas ++ //le suma uno++ 1   pero  += 1 aumenta uno peri si quieres aumentar 2 se     puede y con el ++ nop
    document.getElementById('contadorRonda').innerText='Ronda #' + rondas;

    
}

function seleccion(){
    alert('hola');
}
