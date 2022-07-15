//funcion sin parametros
function saludar(){
    // todo el codigo que quiero que haga esta funcion
    document.write('<p>Hola todos</p>')
};

// funcion con parametros
function saludoNuevo(nombre, apellido){
document.write(`<h3>Hola mi nombre es ${nombre}, mi apellido es ${apellido}`)
}


//invocar o llamar a una funcion
saludar();

let nombreIngresado= prompt('Ingrese un nombre')
let apellidoIngresado= prompt('Ingrese un apellido')

saludoNuevo(nombreIngresado, apellidoIngresado)