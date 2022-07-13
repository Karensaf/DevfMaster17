/*2.- Crear la clase construcción que hereda a otras dos clases "casa" y "edificio". 
a. Sus atributos son: numPuertas, numVentanas, numPisos, direccion, altura, largo y ancho del terreno.
b. Cada uno tiene un método que regresa los metros cuadrados
c. Un método debe regresar la direccion
d. Un método debe permitir modificar la direccion
e. Buscar la mejor manera de aprovechar la herencia */

class Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, largo , ancho, altura) {
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }
    metrosCuadrados() {
        return this.largo * this.ancho + " M2"
    }

    regresarDireccion(){
        return this.direccion
    }

    modificarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion
        return `Nos mudamos a ${this.direccion}`
    }
    
}

class Casa extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, color, largo, ancho, altura){
        super(numPuertas, numVentanas, numPisos, direccion,largo, ancho, altura)
        this.color = color
    }
    

}
class Edificio extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, color, largo, ancho, altura){
        super(numPuertas, numVentanas, numPisos, direccion, largo ,ancho, altura)
        this.color = color
    }
}

let miCasa =  new Casa(7, 12, 2, "Tecámac, México", "Gris", 20, 10, 50);
console.log(miCasa)
console.log(miCasa.metrosCuadrados())
console.log(miCasa.regresarDireccion())
console.log(miCasa.modificarDireccion("Nezahuayork"))
console.log(miCasa.regresarDireccion())

let hotel = new Edificio(40, 70, 6, "Lomas Verdes", "Rojo", 30, 20, 100 );
console.log(hotel)
console.log(hotel.metrosCuadrados())
console.log(hotel.regresarDireccion())
console.log(miCasa.modificarDireccion("Polanco"))

