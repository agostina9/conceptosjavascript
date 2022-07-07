/* Estructura if

if(condicion logica){
    todo el codigo que quiero realizar si la respuesta es true o si se cumple la condicion logica
}else{
    aqui va todo el codigo que quiero hacer si no se cumple la condicion
}

*/

let numero1 = parseInt(prompt("ingrese un numero"));
let numero2 = parseInt(prompt("ingrese otro numero"));

if (numero1 > numero2) {
  document.write("el primer numero es el mayor" + numero1);
} else if (numero1 == numero2) {
  document.write("ambos numeros son iguales");
} else {
  document.write("el segundo numero es el mayor" + numero2);
}
