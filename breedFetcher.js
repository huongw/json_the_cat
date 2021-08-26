const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (response.statusCode !== 200) {
    console.log(response.statusCode, response.statusMessage);
    return;
  } else if (data[0] === undefined) {
    console.log(`Error: ${error}\nPlease enter a cat breed`);
    return;
  }
 
  const description = data[0].description;

  console.log(`Breed: ${breedName} Cat\n${description}`);

});