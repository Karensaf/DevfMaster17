/*3.- Crear una clase Bebida que herede a dos clases Cerveza y Refresco. Ambas clases deben tener la propiedad cantidad (ml). La clase Refresco debe tener el atributo azucar(g) y la clase Cerveza debe tener el atributo 
porcentajeAlcohol(%)
. Crear los getters y setters
    Correspondientes.
 */
    class Bebida {
        constructor(cantidad, marca, tamano) {
            this.cantidad = cantidad;
            this.marca = marca;
            this.tamaño = tamano;
        }

        getCantidad(){
            return `${this.cantidad} ml`  
        }

    }
    
    class Refresco extends Bebida {
        constructor(cantidad, marca, tamaño, azucar){
        super(cantidad, marca, tamaño)
        this.azucar = azucar;
        }

        getAzucar(){
            return `${this.azucar} g`  
        }
    }

    class Cerveza extends Bebida {
        constructor(cantidad, marca, tamaño, alcohol){
        super(cantidad, marca, tamaño)
        this.alcohol = alcohol;
        }

        getAlcohol(){
            return `${this.alcohol} %`  
        }
    } 
    
let Mirinda = new Refresco(500 , "Mirinda", "Chico", 20);
console.log(Mirinda);
console.log(Mirinda.getAzucar());

let Victoria = new Cerveza(1200, "Victoria", "Cahuamón", 15);
console.log(Victoria);
console.log(Victoria.getAlcohol());
