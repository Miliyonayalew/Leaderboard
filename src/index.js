import './style.css';
import fetcher from './modules/fetcher.js';
import send from './modules/sender.js';

send();
document.querySelector('.refresh-btn').addEventListener('click', () => {
  fetcher();
});

window.addEventListener('load', () => {
  fetcher();
});
