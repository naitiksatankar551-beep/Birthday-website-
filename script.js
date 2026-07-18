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
// SCREEN 1 → SCREEN 2
// =============================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
function startCountdown(){

    const countdown =
    document.getElementById("countdown");

    let numbers = ["3","2","1"];

    let i = 0;


    let timer = setInterval(()=>{

        countdown.innerHTML = numbers[i];

        i++;


        if(i === numbers.length){

            clearInterval(timer);

            setTimeout(()=>{

                countdown.innerHTML =
                "Open Your Eyes ❤️";

            },1000);

        }


    },1000);

}
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    screen1.style.animation = "fadeOut 1s forwards";

    setTimeout(() => {

        screen1.style.display = "none";
        screen2.style.display = "flex";
startCountdown();
    }, 1000);

});


// =============================
// SCREEN 2 BUTTON
// =============================

const readyBtn = document.getElementById("readyBtn");

readyBtn.addEventListener("click", () => {

    alert("Gift Box Coming Soon 🎁");

});
