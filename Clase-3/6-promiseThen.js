const obtenerUsuario = () => {
    return fetch('https://randomuser.me/api/')
    .then((respuesta) => {
        return respuesta.json()
    }).then((data) => {
        return data.results[0]
    })
}

const datos = obtenerUsuario()
.then((user) => {
    console.log(`Nombre: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
})

console.log(datos);

