export const close = () => {
  const closebtn = document.querySelector('.closebtn');
  const notify = document.querySelector('.alert');
  closebtn.addEventListener('click', () => {
    notify.style.display = 'none';
  });
};

export const notifySuccess = () => {
  const notify = document.querySelector('.alert');
  const msg = document.querySelector('.msg');
  notify.style.display = 'flex';
  msg.textContent = 'Score Added Successfully!';
  setTimeout(() => {
    notify.style.display = 'none';
  }, 3000);
};