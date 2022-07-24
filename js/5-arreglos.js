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
let mostrarSeries = (titulo) =>{
    document.write(`<ul>`);
    document.write('<h3>'+titulo+'</h3>')
    for (let indice = 0; indice <ul series.length; indice++) {
        document.write(`<li>${series[indice]}</li>`);
        }
    
    document.write(`</ul>`);

}

//agregar un elemento nuevo al arreglo al final
series.push('blabla');
mostrarSeries('Agregamos un nuevo elemento al final de la linea 23')

//agregar un elemento en una posicion particular del arreglo
series.splice(2,0,'the witcher')
mostrarSeries('agregamos the witcher')

//eliminar elementos array.splice(posicion, n de cosas q quiero borrar)
series.splice(4,1)
mostrarSeries('eliminamos un elemento')

//eliminar varios elementos
series.splice(5);
mostrarSeries('eliminar varios elementos')

//modificar un elemento
series[1] = 'Suits'
mostrarSeries('modificar un titulo de una posicion en especial del arreglo')










