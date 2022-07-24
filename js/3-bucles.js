/* Bucles for y while son iguales- do while( se tiene q ejecutar aunque la condicion logica no se cumpla)

while(condicion logica){
    todas las lineas de codigo que quiero que repita el programa
    cambiar la condicion logica
}

EJ:

let cantidad = 0;

while(cantidad <= 20){
    document.write('<br>preparar mate y entregarle al sig' + cantidad)
    cantidad++
}

Bucle Do-While hacerr...mientras

do{
    todo el codigo que quiero ejecutar x cantidad de veces
    cambiar la condicion logica
}while(condicion logica)

EJ:

let cantidadmates = 1

do{
    document.write('<br>preparar mate y entregarle al sig' + cantidadmates)
    cantidadmates++
}while (cantidadmates <= 20)



Bucle for

for(inicializar una variabble ; condicion logica ; incrementar o decrementar la variable declarada al inicio{
    todo el codigo a ejecutar repetidas veces
}
EJ:
*/

for( let cantidadmates = 1; cantidadmates <= 20 ; cantidadmates++){
    document.write('<br>preparar mate y entregarle al sig' + cantidadmates)
}