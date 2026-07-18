// =============================
// SCREEN 1 JAVASCRIPT
// =============================

// Typewriter Text
const text = "Made only for my Rasmalai 🥰";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = () => {
    typeWriter();
};


// =============================
// Floating Hearts
// =============================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("span");

    const emojis = ["❤️", "💖", "💕", "💗", "💘", "💞"];

    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 350);


// =============================
// Sparkles
// =============================

const sparkles = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("span");

    sparkle.innerHTML = "✨";

    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.animationDuration = (2 + Math.random() * 2) + "s";

    sparkles.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3500);

}

setInterval(createSparkle, 250);


// =============================
// Button Click
// =============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startBtn.innerHTML = "Loading... 💖";

    startBtn.disabled = true;

    document.body.classList.add("fade-out");

    // Screen 2 yahin se open hogi
    setTimeout(() => {

        alert("Screen 2 Coming Soon 🎁");

    }, 1500);

});
