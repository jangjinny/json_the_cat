const request = require('request'); //accessing request library

const breedName = process.argv[2]; //grabbing the input from terminal
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const breedFetcher = (breedName) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    }

    const data = JSON.parse(body);
    const catBreed = data[0];

    if (!catBreed) {
      console.log('This breed does not exist in our data. Please input breeds ID. For example, sib for Siberian.');
      return;
    } else {
      console.log(catBreed.description);
    }
  });
};

breedFetcher(breedName);

module.exports = { breedFetcher };