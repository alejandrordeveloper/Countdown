let timeLeft = 5;
const secondsSpan = document.getElementById('seconds');

function updateCountdown() {
  secondsSpan.textContent = timeLeft.toString().padStart(2, '0');
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    clearInterval(timer);
    document.getElementById('main-title').classList.add('hidden');
    document.getElementById('end-message').classList.remove('hidden');
    document.querySelector('.countdown').style.display = 'none';
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();