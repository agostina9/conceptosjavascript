let estacion = parseInt(
  prompt(
    "ingrese su estacion del año preferida; 1-verano, 2-otoño, 3-primavera, 4-invierno"
  )
);

//if(estacion === 1){
//document.write('Helado');
//}else if(estacion === 2){
//    document.write('Locro');
//}
//else if(estacion === 3){
//    document.write('Chocolate');
//}
//else if(estacion === 4){
//    document.write('Ensalada');
//}else{
//    document.write('Ingresaste una opcion no contemplada')
//}

/* 
Switch(opcion){
    case 1:
        todas las lineas d codigo en caso que el usuario selecciono 1
        ..
        ..
        break;

        case 2:
    todas las lineas d codigo en caso que el usuario selecciono 2
...
..
break;

default:
    todas las lineas de codigo ejecutar en caso que el usuario seleccione una opcion diferente
    }
*/

switch (estacion) {
  case 1:
  case "1":
  case "verano":
    document.write("Helado");
    break;
  case 2:
    document.write("locro");
    break;
  case 3:
    document.write("chocolate");
    break;
  case 4:
    document.write("ensalada");
    break;
  default:
    document.write("Ingresaste una opcion no contemplada");
}
