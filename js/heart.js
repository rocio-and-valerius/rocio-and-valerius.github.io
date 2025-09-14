function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = '<img src="img/icon.svg" style="width:20px;height:20px;">';
  document.body.appendChild(heart);

  // Random position
  const gap = 30;
  const x = Math.random() * (window.innerWidth - 2 * gap) + gap;
  const y = Math.random() * (window.innerHeight - 2 * gap) + gap;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.position = "fixed";

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Adjust frequency
// setInterval(createHeart, 15);

// Run animation for 20 seconds only
const heartInterval = setInterval(createHeart, 1500);
setTimeout(() => {
  clearInterval(heartInterval);
}, 10000);
