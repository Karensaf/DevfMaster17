/*4.- Crea una superclase llamada Electrodoméstico con las siguientes características:
a. Sus atributos son precio, color, consumoEnergetico y capacidad (peso máximo)
b. El constructor solo debe pedir precio, color y capacidad. 
c. consumoEnergetico debe iniciar con valor de 100

5.- Crea una subclase de Electrodomestico llamada Lavadora con las siguientes características:
a. Su atributo es carga(kg de ropa), además de los atributos heredados.
b. Crea el método precioFinal(). Este se calcula multiplicando el consumoEnergetico por la carga.
 */

class Electrodomestico{
	constructor(color, capacidad, consumo ){
		this.precio 
		this.color = color 
		this.consumo = 100
        this.capacidad = capacidad
	}

    getPrecio(){
		return `El precio de está lavadora es de ${this.precio} pesos`
	}
    precioFinal() {
        this.precio = this.consumo * this.carga 
        return  this.precio
    }

	getCapacidad(){
		return `${this.capacidad} peso máximo`
	}

    getConsumo(){
        return this.consumo
    }

	setConsumo(nuevoConsumo) {
		this.consumo = nuevoConsumo
	}

    getColor(){
		return `Está lavadora es color ${this.color}`
	}
    setColor(nuevoColor) {
        this.color = nuevoColor
    }
}

class Lavadora extends Electrodomestico{
	constructor( color, capacidad, consumo, carga){
		super(color, consumo)
		this.carga = carga
	}

	getCarga(){
		return `${this.carga} kg de ropa` 
	}
}


let lavadorsita = new Lavadora("Gris", 19, 200, 15);
console.log(lavadorsita);
console.log(lavadorsita.getCarga());
console.log(lavadorsita.setColor("Blanca"));
console.log(lavadorsita.getColor());
console.log(lavadorsita.precioFinal());
console.log(lavadorsita.setConsumo(500));
console.log(lavadorsita.getPrecio());

