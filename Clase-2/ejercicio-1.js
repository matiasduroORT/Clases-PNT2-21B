let persona = {
    nombre: 'Martin',
    edad: 26,
    materia: ['PNT2']
}


function cambiarEdad(persona, edad){
    persona.edad = edad
    return persona
}

// console.log(cambiarEdad(persona, 30));





function agregarMateria(persona, materia){

    persona.materia.push(materia)

    return persona
}

// console.log(agregarMateria(persona, 'Programacion 1'));



function verificarMateria(persona){


    let tienePNT2 = persona.materia.includes('PNT2')

    if(!!tienePNT2){
        return 'Tiene PNT2'
    }

    return persona
}

// console.log(verificarMateria(persona));





// Verifique si es mayor de edad, si es menor devolver menor de edad, y si es numero par al final, decir que es par
function verificarEdad(persona){
    let Mayoria = persona.edad > 18;
    console.log(persona);

    if(!Mayoria){
        return 'Menor de edad' ;
    }

    let par = persona.edad % 2 === 0

    if(par){
        persona.EsPar = true
    }

    return persona
}

console.log(verificarEdad(persona));



