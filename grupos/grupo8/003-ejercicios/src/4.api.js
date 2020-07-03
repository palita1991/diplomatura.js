import fetch from 'node-fetch';

let loading = true;
fetch('http://jsonplaceholder.typicode.com/users')
    .then(respuesta => respuesta.json())
    .then(data => data.map(m => ({ Nombre: m.name, Ciudad: m.address.city })))
    .then(d => console.log(d))
    .catch(error => console.error(error));



