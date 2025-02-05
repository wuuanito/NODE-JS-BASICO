const axios = require("axios");
const { log } = require("console");
const fs = require('fs').promises;
const path = require('path');
const main = async () => {
  let response = await axios.get("https://dragonball-api.com/api/characters");
  let {
    data: { items },
  } = response;
  const headers = 'NOMBRE,KI\n'

  let heroes = items.map ((heroe)=>{
    return{
      nombre : heroe.name,
      ki : heroe.ki
    }
  }).map((heroe)=>Object.values(heroe).join(',') ).join('\n')

  const contenidoCsv = headers + heroes
  
  await fs.writeFile(path.join(__dirname,'data.csv'),contenidoCsv)


}


main()
