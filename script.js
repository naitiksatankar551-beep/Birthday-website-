// ===============================
// Screen 1 - Welcome Screen
// ===============================

const startBtn = document.getElementById("startBtn");

// Button click animation
startBtn.addEventListener("click", () => {

    // Button animation
    startBtn.innerHTML = "Loading Surprise... 💖";
    startBtn.disabled = true;

    // Fade Out Effect
    document.body.classList.add("fade-out");

    // Go to Screen 2
    setTimeout(() => {
        window.location.href = "gift.html";
    }, 1800);

});

// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    const emojis = ["❤️","💖","💕","💗","💘","💞"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 350);

// Sparkle generator
const sparkles = document.querySelector(".sparkles");

setInterval(() => {

    const star = document.createElement("span");

    star.classList.add("sparkle");

    star.innerHTML = "✨";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration = (2 + Math.random() * 2) + "s";

    sparkles.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);

}, 250);
