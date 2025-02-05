const axios = require ('axios')


const main = async ()=>{
    let response = await axios.get('https://api.sampleapis.com/simpsons/characters')
    let {data} = response
    let personajes = data.map((personajes)=>{
        return{
            personajes : personajes.name
        }
    })

    personajes.forEach(e => {
        if(e.personajes=="Homer Simpson"){
            console.log("Encontrado")
            console.log(e);
            
        }
        
    });    
}

main()