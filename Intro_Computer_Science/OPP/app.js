class Alumno {
    constructor (nombre, apellido, caliFinal, inscrito, calificaciones){
        this.nombre = nombre;        //el this hacer como q sea un formato nuevo
        this.apellido = apellido;
        this.caliFinal = caliFinal;
        this.inscrito = inscrito;
        this.calificaciones = [];
    }

        estaInscrito() {
            if(this.inscrito)
            return "El alumno está inscrito"
            else
            return "El alumno NO está inscrito"
        }

        elThisEs(){
            return this
        }

        //Ejercicio 1 método: ObtenerInicialesDeAlumno()
        obtenerInicialesDelAlumno (){
            // var letras = this.nombre.split("");
            // var letraInicial = letras.slice(0,1);
            // return letraInicial
            // console.log(letraInicial);   //Con esto comentado solo saque la letra de nombre
            let iniciales = this.nombre.charAt(0) + "  " + this.apellido.charAt(0);;
            return iniciales
        }
        //Ejercicio 2 método: ObtenerNombreCompleto()
        obtenerNombreCompleto(){
            let nombreCompleto = this.nombre + " " + this.apellido 
            return nombreCompleto
        }
    
        // Extra 1. método: aprobado(). Mínima aprobatoria: 6.0
        aprobado(){
            if (this.caliFinal > 6.0)
                return "El alumno está aprobado"
                else
            return "El alumno está reprobado Sorry"
            
        }
        // Extra 2. métodos: agregarCalificación(materia, promedio) (arrays u objetos literales) y otro obtenerPromedio() 
        agregarCalificacion(materia,promedio){
            let materiaObjeto = {
                nombre: materia,
                promedio: promedio 
            }
            this.calificaciones.push(materiaObjeto)
        }
}
//Creamos una nueva variable y new lo usamos por defaul y Alumno es la clase
let karensita = new Alumno('Karen','Arteaga', 6.5, false) 
let carmelinda = new Alumno('Carmen', 'Franco', 10, true)
console.log(carmelinda.elThisEs())
console.log(carmelinda.elThisEs().nombre = "María") //Les está cambiamdo el nombre a Carmen por María
console.log(carmelinda.elThisEs())
console.log(carmelinda.caliFinal)
console.log(karensita)
// console.log(karensita.elThisEs())  //EL THIS REGRESARIA UN OBJETO COMO TAL
console.log(karensita.nombre)
console.log(karensita.caliFinal)  //primero se escribe de quies es el nombre luego de los atributos
console.log(karensita.estaInscrito())
console.log(karensita.obtenerInicialesDelAlumno())
console.log(karensita.obtenerNombreCompleto())
console.log(karensita.aprobado())
console.log(karensita.agregarCalificacion("Matematicas",9.0))

