//usuario, nombre, mail, fechaNacimiento(año), password, estado

class Usuario{
    //primer metodo que se ejecuta en una clase
    constructor(userName, nombre, mail, año, password){
       this.nombreUsuario= userName;
       this.nombre = nombre;
       this.mail = mail;
       this.año = año;
       this.password= password;
       this.estado = true;
    }
    //agregaria todos los metodos q considero necesario
    cambiarPassword(){}

    mostrarDatos(){
        document.write(`<ul>
        <li> Nombre:${this.nombre} </li>
        <li> Email:${this.mail} </li>
        <li> Fecha de Nacimiento:${this.año} </li>
        <li> Nombre de Usuario:${this.nombreUsuario} </li>
        </ul>`)
    }
    //propiedades conmutadas
    set modificarPassword(nuevoPass){
        this.password = nuevoPass;
    }
}


//crear un usuario, instanciar
let jose = new Usuario('joseGM', 'Jose Luis GM', 'joseluis@gmail.com','1989', 'aJJ251')
let agostina = new Usuario('Agos', 'Agostina Loza', 'agos@gmail.com','1998', 'aJJ251')

console.log(jose);
jose.mostrarDatos();
agostina.mostrarDatos();

jose.modificarPassword='12345678'
console.log(jose);