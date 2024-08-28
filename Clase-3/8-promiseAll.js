const obtenerUsuarioRandom = async () => {
    const respuesta = await fetch('https://randomuser.me/api/')
    const datos = await respuesta.json()

    const name = datos.results[0].name
    return name.first + name.last
}

const obtenerPaisRandom = async () => {
    try {
        
        throw new Error('Error')
        const respuesta = await fetch('https://randomuser.me/api/')
        const datos = await respuesta.json()
        return datos.results[0].location.pais
    } catch (error) {
        return 'Algo salio mal'
    }
}

async function funcionPadre(){
    const user = await obtenerUsuarioRandom() // tarda 5 segundos
    const pais = await obtenerPaisRandom() // tarda 5 segundos
// aca llega a los 10 segundos
    console.log(user);
    console.log(pais);
}

async function funcionPadrePromiseALL(){
    // obtenerUsuarioRandom() tarda 5 segundos
    // obtenerPaisRandom() tarda 5 segundos

    try {
        const [user, pais] = await Promise.all([obtenerUsuarioRandom(), obtenerPaisRandom()]) 
        // lega aca a los 5 segundos

        console.log(user);
        console.log(pais);
        
    } catch (error) {
        console.error('fallo: ')
    }
}
funcionPadrePromiseALL()
// funcionPadre()