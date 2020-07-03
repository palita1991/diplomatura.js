import fetch from 'node-fetch';


export async function getRemoteData() {
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users');
        const convertirAjson = await res.json();
        const datos = await modificarDatos(convertirAjson);
        return datos;
    }
    catch (err) {
        // Oops ...
    }
}

function modificarDatos(d) {

    let salida = d.map(m => ({
        nombre: m.name,
        ciudad: m.address.city
    }));
    return salida;
}

