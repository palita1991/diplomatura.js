import fetch from 'node-fetch';

  export async function getRemoteData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');

        let data = await response.json();

        let infoUser = await data.map(user => ({
            Nombre:user.name,
            Ciudad:user.address.city
        }))
      
        return infoUser;
      
    } catch (error) {
        console.log("ERROR: ",error)
    }
   }

getRemoteData().then(response => console.log(response));