
import fetch from 'node-fetch';

// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{ console.log(data);
        let infoUser =  data.map(user => 
            {return {
                Nombre:user.name, 
                Ciudad:user.address.city}}
            )
       console.log(infoUser) })
       .catch(error => console.log("ERROR: ",error))
   ; //


