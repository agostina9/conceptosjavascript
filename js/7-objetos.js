//objetos con notacion literal

let motorola = {
    //propiedades-> clave:valor
    modelo:'G31',
    SO:'Android',
    resistenteAgua:false,
    pantalla: 9,
    // color:['celeste','negro','plateado'],
    // conectividad:{
    //     bluetooth:true,
    //     red:'4g',
    // }
    //metodos son similares a funciones
    navegar: function(){
        document.write('<p>Se abrio el navegador..</p>')},
    apagar: ()=> {document.write('<p>el dispositivo se apago</p>')},

}

//mostrar un objeto
console.log(motorola);
//document.write(motorola);
document.write(`<p>pantalla original: ${motorola.pantalla}</p>`);
document.write(`<p>SO: ${motorola['SO']}</p>`);

//modificar una propiedad de un objeto
motorola.pantalla=10;
document.write(`<p>pantalla modificada: ${motorola.pantalla}</p>`);

//borrar una propiedad de un objeto
delete motorola.resistenteAgua;
console.log(motorola);

//agregar una nueva propiedad a un objeto existente
motorola.precio = 90000;
document.write(`<p>precio $: ${motorola.precio}</p>`);

//usar un metodo de un objeto
motorola.navegar();
