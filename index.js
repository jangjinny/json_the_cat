const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]; //grabbing the input from terminal

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error:', error);
    return;
  } else {
    console.log(desc);
  }
});
