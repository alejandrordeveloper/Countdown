// let count = 10;
// const seconds = document.getElementById('seconds');
// const titulo = document.getElementById('main-title');
// const endMessage = document.getElementById('end-message');

// const interval = setInterval(() => {
//   if (count >= 0) {
//      seconds.textContent = count;  //.toString().padStart(2, '0');
//     count--;
//   } else {
//     clearInterval(interval);
//     titulo.classList.add('hidden');
//     document.getElementById('end-message').classList.remove('hidden');
//     document.querySelector('.countdown').style.display = 'none';
//   }
// }, 1000);

// pide al usuario la cantidad de segundos y la convierte a entero
// let count = parseInt(
//   prompt('¿Cuántos segundos quieres para la cuenta regresiva?', '10'),
//   10
// ) || 10; // si no ingresa nada, usa 10 por defecto

// const secondsEl   = document.getElementById('seconds');
// const titulo      = document.getElementById('main-title');
// const endMessage  = document.getElementById('end-message');

// const interval = setInterval(() => {
//   if (count >= 0) {
//     secondsEl.textContent = count;
//     count--;
//   } else {
//     clearInterval(interval);
//     titulo.classList.add('hidden');
//     endMessage.classList.remove('hidden');
//     document.querySelector('.countdown').style.display = 'none';
//   }
// }, 1000);

const inputSec    = document.getElementById('input-seconds');
const startBtn    = document.getElementById('start-btn');
const secondsEl   = document.getElementById('seconds');
const titulo      = document.getElementById('main-title');
const endMessage  = document.getElementById('end-message');
const countdownEl = document.querySelector('.countdown');

startBtn.addEventListener('click', () => {
  // lee el valor y lo convierte a entero
  let count = parseInt(inputSec.value, 10) || 0;
  if (count <= 0) return alert('Ingresa un número mayor que 0');

  // muestra la cuenta y oculta la configuración
  countdownEl.classList.remove('hidden');
  inputSec.disabled = true;
  startBtn.disabled = true;

  const interval = setInterval(() => {
    if (count >= 0) {
      secondsEl.textContent = count;
      count--;
    } else {
      clearInterval(interval);
      titulo.classList.add('hidden');
      endMessage.classList.remove('hidden');
      countdownEl.style.display = 'none';

      new mojs.Burst({
        parent: document.body,
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        radius: { 0: 600 },
        count: 20,
        children: {
          shape: 'circle',
          fill: ['#FF6D00', '#FFA000', '#FFC400'],
          duration: 2000,
          delay: 'stagger(0, 25)',
          radius: 10
        }
      }).play();
    }
  }, 1000);
});

