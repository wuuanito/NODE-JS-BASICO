const axios = require("axios");

const main = async () => {
  let response = await axios.get("https://dragonball-api.com/api/characters");
  let {
     data: {items}
     } = response;

  let heroes = items.map((heroes) => {
    return {
      nombre: heroes.name
    };
  });
  console.log(heroes);
};

main();
