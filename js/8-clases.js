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
    //propiedades conmutadas setters y getters
    set modificarPassword(nuevoPass){
        this.password = nuevoPass;
    }

    set modificarNombre(nuevoNombre){
this.nombre=nuevoNombre;
    }
    get mostrarNombre(){
        return this.nombre;
    }
}
//alumnos: calificaciones, matricula, curso fullstack, estadoCurso:aprobado, en curso.
class Alumno extends Usuario{
    constructor(matricula,curso,userName, nombre, mail, año, password){
        //invocar al metodo constructtor de la clase superior
        super(userName,nombre,mail, año,password);
        //agregar propiedades
        this.matricula=matricula;
        this.curso=curso;
        this.estadoCurso='En curso';
        this.calificaciones=[];
    }
    //metodos
    recibirCalificacion(nota){
        this.calificaciones.push(nota);
    }

    obtenerPromedio(){
        let cantidadNotas=this.calificaciones.length;
        let sumatoriaNotas=0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            sumatoriaNotas += this.calificaciones[i];
            }
        let promedio= sumatoriaNotas/cantidadNotas;
        document.write(`<p>el alumno ${this.mostrarNombre} tiiene de promedio ${this.promedio}</p>`)  
    }
    mostratDatosAlumno(){
        document.write(`<ul>
        <li> Matricula:${this.matricula} </li>
        <li> Curso:${this.curso} </li>
        <li> estado de cursado:${this.estadoCurso} </li>
        </ul>`)
    }
mostrarDatos(){
    document.write('<h3>datos personales</h3>')
    document.write(`<ul>
    <li> Nombre:${this.nombre} </li>
    <li> Email:${this.mail} </li>
    <li> Fecha de Nacimiento:${this.año} </li>
    <li> Nombre de Usuario:${this.nombreUsuario} </li>
    </ul>`)  
    document.write('<h3>datos Academicos</h3>')
    document.write(`<ul>
        <li> Matricula:${this.matricula} </li>
        <li> Curso:${this.curso} </li>
        <li> estado de cursado:${this.estadoCurso} </li>
        </ul>`)
}

    //get y set


}
//mentores: antiguedad, cursosDictados p cpmisionesACargo=[]
//crear un usuario, instanciar
let jose = new Usuario('joseGM', 'Jose Luis GM', 'joseluis@gmail.com','1989', 'aJJ251')
let agostina = new Usuario('Agos', 'Agostina Loza', 'agos@gmail.com','1998', 'aJJ251')

console.log(jose);
jose.mostrarDatos();
agostina.mostrarDatos();

jose.modificarPassword='12345678'
console.log(jose);

//usamos los get y set
document.write(`<p>Jose giene de nombre ${jose.mostrarNombre}</p>`)
jose.modificarNombre='jose gomez marigliano';
document.write(`<p>El objeto jose tiene de nombre ${jose.mostrarNombre}</p>`)

//crear objeto alumno
let nicolas = new Alumno(123,'Fullstack', 'nicoGM', 'Nicolas', 'nicogm@vmkvr.com','1989','ncmk2321' )
let notaBootstrap=parseInt(prompt('Ingresar nota correspondiente'));
let notaGit=parseInt(prompt('Ingresar nota correspondiente'));

nicolas.recibirCalificacion(notaBootstrap);
nicolas.recibirCalificacion(notaGit);
nicolas.obtenerPromedio();
nicolas.mostratDatosAlumno();
nicolas.mostrarDatos();

