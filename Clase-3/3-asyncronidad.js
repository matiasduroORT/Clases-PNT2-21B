function imprimirUno(){
    console.log('Uno');
}

function imprimirDos(){
    console.log('Dos');
}

function imprimirTres(){
    console.log('Tres');
}

// setTimeout(imprimirUno, 1000)
// setTimeout(imprimirDos, 0)
// setTimeout(imprimirDos, 0)
function llamadoAPI(){

    let valor;
        
    valor = 20
 

    return valor
}

let response

setTimeout(() => {
    response = llamadoAPI()
}, 500);


setTimeout(() => {
console.log(response);
}, 20000);