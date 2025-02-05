const axios = require ('axios')


const main = async () => {

let response = await axios.get('https://rickandmortyapi.com/api/character');
let {
    data:{results}
} = response;

let personajes = results.map((personajes)=>{
    return {
        id: personajes.id,
        name: personajes.name
    }
})
console.log(personajes);

}



main()