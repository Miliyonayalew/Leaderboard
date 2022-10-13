import './style.css';
import fetcher from './modules/fetcher.js';
import send from './modules/sender.js';
import { close } from './modules/notify.js';

send();
close();
document.querySelector('.refresh-btn').addEventListener('click', () => {
  fetcher();
});

window.addEventListener('load', () => {
  fetcher();
});
