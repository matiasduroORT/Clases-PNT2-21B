let undef = undefined;
let nu = null;
let boo = true;
let num = 27;
let str = 'Matias';



let nombre = 'Martin';
let curso = 'B';

const aprobado = 5;

const calculo = 5 + 21;

let alumno = {
    nombreCompleto: nombre,
    "Apellido Completo":"Cardozo",
    edad: 27,
    curso,
    saludo: function (){
        console.log('Hola!');
    },
    materias:['PNT2', 'PNT1'],
    aprobado,
}
console.log(aprobado);

alumno.aprobado = true;

console.log(aprobado);

// console.log(alumno.edad);
// console.log(alumno.nombreCompleto);
// console.log(alumno["Apellido Completo"]);
// console.log(alumno.saludo);
// console.log(alumno.materias);


