let count = 10;
const seconds = document.getElementById('seconds');
const titulo = document.getElementById('main-title');
const endMessage = document.getElementById('end-message');

const interval = setInterval(() => {
  if (count >= 0) {
     seconds.textContent = count;  //.toString().padStart(2, '0');
    count--;
  } else {
    clearInterval(interval);
    titulo.classList.add('hidden');
    document.getElementById('end-message').classList.remove('hidden');
    document.querySelector('.countdown').style.display = 'none';
  }
}, 1000);