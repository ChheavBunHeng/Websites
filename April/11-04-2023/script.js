const CountDown = document.getElementById('Count');
const BTN = document.getElementById('BTN');

BTN.addEventListener('click', startCountdown);

function startCountdown() {
  let secondsLeft = 10; // Set the countdown time in seconds here
  CountDown.innerHTML = secondsLeft;

  const countdownInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft < 0) {
      clearInterval(countdownInterval);
      CountDown.innerHTML = "Time's up!";
      return;
    }
    CountDown.innerHTML = secondsLeft;
  }, 1000); // Update the countdown every second (1000 milliseconds)
}
