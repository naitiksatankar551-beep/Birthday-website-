// Countdown to 29 July
const countdown = document.getElementById("countdown");

const birthday = new Date("July 29, 2026 00:00:00").getTime();

const timer = setInterval(() => {

  const now = new Date().getTime();

  const distance = birthday - now;

  if (distance <= 0) {
    clearInterval(timer);

    countdown.innerHTML =
      "🎉 Happy Birthday Rishuu ❤️";

    launchConfetti();

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}, 1000);


// Surprise Button
const btn = document.getElementById("surpriseBtn");

btn.addEventListener("click", () => {

  alert(`💖

Happy Birthday My Beautiful Rishuu ❤️

You are the most precious part of my life.

May your smile always shine brighter than the stars.

I promise to always stand beside you.

Forever Yours,

Lucky ❤️`);

});


// Floating Hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {

  const heart = document.createElement("div");

  heart.innerHTML = "💖";

  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    (20 + Math.random() * 20) + "px";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);

}, 400);


// Simple Confetti
function launchConfetti() {

  for (let i = 0; i < 80; i++) {

    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "25px";
    confetti.style.transition = "4s linear";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = "100vh";
    }, 100);

    setTimeout(() => {
      confetti.remove();
    }, 4500);

  }

}
