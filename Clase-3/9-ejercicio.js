
const obtenerUsuarios = async () => {

    const hombres = [];
    const mujeres = [];

    for (let i = 0; i < 10; i++) {
        const respuesta = await fetch('https://randomuser.me/api/');
        const data = await respuesta.json();

        const usuario = data.results[0];

        if (usuario.gender === 'male') {
            hombres.push(usuario);
        } else if (usuario.gender === 'female') {
            mujeres.push(usuario);
        }
    }

    return { hombres, mujeres };
}

async function funcionPadre() {
    const { hombres, mujeres } = await obtenerUsuarios();

    const txtUsuario = (user) => {
        const nombre = `${user.name.first}`;
        const genero = user.gender === 'male' ? 'es un hombre' : 'es una mujer';
        return `nombre: ${nombre},${genero}`;
    };

    const hombresString = hombres.map(txtUsuario).join('\n');
    const mujeresString = mujeres.map(txtUsuario).join('\n');

    console.log(hombresString);
    console.log(mujeresString);
}

funcionPadre();
