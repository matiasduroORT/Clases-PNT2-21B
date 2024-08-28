const llamadoAPI = () => {

    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('Hola')
            }, 2000);
        } catch (error) {
            reject('Error')
        }
    })
}

const peticion = () => {
    const data = llamadoAPI()
    console.log(data);
    console.log('Esperando...');
    setTimeout(() => {
        console.log(data);
    }, 2001);

    return data
}

peticion()