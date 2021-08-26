const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      return callback(response.statusCode, null);
    }

    if (data[0] === undefined) {
      return callback(`Cat is undefined`, null);
    }

    const description = data[0].description;

    if (response) {
      return callback(null, description);
    }
  
  });
};

module.exports = { fetchBreedDescription };