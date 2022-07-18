//crear un arreglo vacio
let listaSupermercado = [];

// crear un arreglo con datos
let series = ['peaky blinders', 7, 'stranger things', 4, 'the boys', 3, 'loky']

//mostrar un arreglo
document.write(series)

//mostrar un elemento del arreglo
document.write('<br>' + series[0])

//mostrar un arreglo dentro de una lista
//series.length devuelve la cantidad de elementos en el arreglo
document.write(`<ul>`);
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);

//agregar un elemento nuevo al arreglo al final
series.push('blabla');

document.write('<h3>Agregamos un nuevo elemento al final de la linea 23')
document.write(`<ul>`);
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);

//agregar un elemento en una posicion particular del arreglo
series.splice(2,0,'the witcher')
document.write('agregamos the witcher')
document.write(`<ul>`);
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);

//eliminar elementos array.splice(posicion, n de cosas q quiero borrar)
series.splice(4,1)
document.write(`<ul>`);
document.write('eliminamos un elemento')
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);

//eliminar varios elementos
series.splice(5);
document.write(`<ul>`);
document.write('eliminar varios elementos')
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);

//modificar un elemento
series[1] = 'Suits'
document.write(`<ul>`);
document.write('modificar un titulo de una posicion en especial del arreglo')
for (let indice = 0; indice < series.length; indice++) {
    document.write(`<li>${series[indice]}</li>`);
    }

document.write(`</ul>`);










