// Target date
const targetDate = new Date("2025-11-07T12:00:00").getTime();

let countdownFinished = false;

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML =
      window.currentLangData.logo_countdown_done;
    countdownFinished = true;
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("day").textContent = days;
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
}

// Update interval
const interval = setInterval(updateCountdown, 100);
updateCountdown();
