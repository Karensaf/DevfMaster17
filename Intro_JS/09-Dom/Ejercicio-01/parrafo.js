const parrafo = document.createElement("p");
//añadir un texto
const nodeDeTexto = document.createTextNode("Avatar La leyenda de Korra");
//parrafo.innerHTML("Avatar LALEYENDA DE KORRA");
//AppendCHLD  = AGREGAR UN HIJO
parrafo.appendChild(nodeDeTexto);

parrafo.style.color = "red"
const padre = document.getElementById("padre");
padre.appendChild(parrafo);

// Crear un elemnto "a"
// añadir un texto
// añadir un atributo para la url
// pintar el nuevo elemento en HTML

const link = document.createElement("a"); //creamos la etiqueta <a></a>

const miTexto = document.createTextNode("Esto te va a mandar a YOU TUBE");  //Ir a YOUTUBE
link.appendChild(miTexto);

// href ""
const linkAtributo = document.createAttribute("href");
//href https://www.youtube.com/
linkAtributo.value = "https://www.youtube.com/";
//se convina todo
link.setAttributeNode(linkAtributo);
padre.appendChild(link);

//Remover elementos

// const elementoARemover = document.getElementById("remover");
// elementoARemover.remove();




