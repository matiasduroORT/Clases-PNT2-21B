const obtenerUsuarios = async () => {
    const hombres = [];
    const mujeres = [];

    for (let i = 0; i < 10; i++) {
        const respuesta = await fetch('https://randomuser.me/api/');
        const data = await respuesta.json();

        if (data.results[0].gender === 'female') {
            mujeres.push(data.results[0].name.first);
        } else {
            hombres.push(data.results[0].name.first);
        }
    }

    return { hombres, mujeres };
}

async function funcionPadre() {
    const { hombres, mujeres } = await obtenerUsuarios();
    console.log('Hombres:', hombres);
    console.log('Mujeres:', mujeres);
}

funcionPadre();
