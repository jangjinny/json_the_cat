const request = require('request'); //accessing request library


const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback('Error:', error);
      return;
    }

    const data = JSON.parse(body);
    const catBreed = data[0];

    if (!catBreed) {
      callback(error, null);
    } else {
      callback(null, catBreed.description);
    }
  });
};

module.exports = { fetchBreedDescription };