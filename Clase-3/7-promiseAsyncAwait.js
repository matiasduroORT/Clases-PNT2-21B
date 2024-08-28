const obtenerUsuario = async () => {
    const respuesta = await fetch('https://randomuser.me/api/')
    
    const datos = await respuesta.json()
    
    // console.log(datos.results[0]);

    
    return datos.results[0]

}



async function funcionPadre(){
    const user = await obtenerUsuario()
    const numero = obtenerNumero();
    console.log(numero);
    console.log(`Nombre: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);

    console.log('Ya termino');
   
}

funcionPadre()

function obtenerNumero(){
    return 7
}

