function saludo(){

    let mensaje = "Hola"

    function Hija(){
        console.log(mensaje);
    }
    

    function Hijo(){
        console.log(mensaje + 2)
    }

    return [Hija, Hijo]
}

saludo()


const llamado = saludo();

const nuevaFuncion = llamado[0];

function saludo(){

}


nuevaFuncion()
