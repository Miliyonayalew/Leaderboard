import fetcher from './fetcher.js';
import { notifySuccess } from './notify.js';

const sender = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q598K2WKvuC3g5zCF0XV/scores', {
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  notifySuccess();
  fetcher();
};

const send = () => {
  const form = document.querySelector('#score-submit');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sender();
    e.target.reset();
  });
};

export default send;