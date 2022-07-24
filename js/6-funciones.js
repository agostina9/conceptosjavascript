//funcion sin parametros
function saludar(){
    // todo el codigo que quiero que haga esta funcion
    document.write('<p>Hola todos</p>')
};

// funcion con parametros
function saludoNuevo(nombre, apellido){
document.write(`<h3>Hola mi nombre es ${nombre}, mi apellido es ${apellido}`)
}

//funciones que retornan un valor
// function convertirDolaresAPesos(dolares) {
//     let precioFinal = dolares*301;
//     return precioFinal;
//}
//funcion anterior en forma de flecha
let convertirDolaresAPesos= (dolares) => dolares*301;
   


//invocar o llamar a una funcion
saludar();

let nombreIngresado= prompt('Ingrese un nombre')
let apellidoIngresado= prompt('Ingrese un apellido')

saludoNuevo(nombreIngresado, apellidoIngresado)

let play = convertirDolaresAPesos(800);
console.log(play)
document.write(`<p> AMD Ryzen 9 $${convertirDolaresAPesos(550)}</p>`)