import render from './render.js';

const fetcher = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q598K2WKvuC3g5zCF0XV/scores', {
    method: 'GET',
  });
  const data = response.json();
  data.then((object) => render(object.result));
};

export default fetcher;