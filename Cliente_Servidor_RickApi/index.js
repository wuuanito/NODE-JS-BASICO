const axios = require("axios");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let personajesVivos = results
    .filter((personajes) => personajes.status === "Alive")
    .map((personajes) => {
      return {
        nombre: personajes.name,
      };
    });

  console.log(personajesVivos);
};

main();
