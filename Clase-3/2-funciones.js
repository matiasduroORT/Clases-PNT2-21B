function map(arr, fnc){
    const nuevoArray = []

    arr.forEach(function(valores) {
        nuevoArray.push(fnc(valores))
    });

    return nuevoArray
}

function sumarUno(num){
    return num + 1
}

function multiplicar(num){
    return num * 2
}

const array = ['nombre', 5, '8', 20]

console.log(map(array, sumarUno))
console.log(map(array, multiplicar))

