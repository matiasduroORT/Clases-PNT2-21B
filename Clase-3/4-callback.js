function obtenerNombreUsuario(id, ejemploCallback){

    setTimeout(() => {
        
        const nombres = {
            Usuario1: 'Matias',
            Usuario2: 'Romina',
            Usuario3: 'Martin',
            Usuario4: 'Pablo'
        }
        console.log(nombres);

        const nombre = nombres[id]

        ejemploCallback(nombre)
    }, 1000);
}


obtenerNombreUsuario('Usuario2', (nombre) => {
    console.log(`El nombre del usuario es: ${nombre}`);
    // console.log('El nombre del usuario es: ' + nombre);
})