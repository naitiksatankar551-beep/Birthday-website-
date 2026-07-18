// =================================
// LOADING SCREEN
// =================================

window.addEventListener("load", () => {

    setTimeout(() => {

        let loading = document.getElementById("loadingScreen");

        if (loading) {
            loading.style.display = "none";
        }

        showScreen("welcomeScreen");

    }, 4000);

});

// =================================
// SHOW SCREEN FUNCTION
// =================================

function showScreen(id){

    document.querySelectorAll(".screen").forEach(screen=>{

        screen.classList.remove("active");

    });

    let next=document.getElementById(id);

    if(next){

        next.classList.add("active");

    }

}

// =================================
// TYPEWRITER EFFECT
// =================================

let text =
"Rishuu ❤️,\n\nHappy Birthday to the most beautiful person in my life.\n\nThank you for making every day special. I wish you endless happiness, smiles, success and lots of love.\n\nAlways keep smiling.\n\nForever Yours,\nNaitik ❤️";

let index = 0;

function typeWriter(){

    let box = document.getElementById("typewriterText");

    if(!box) return;

    box.innerHTML = "";

    index = 0;

    function typing(){

        if(index < text.length){

            if(text.charAt(index) === "\n"){

                box.innerHTML += "<br>";

            }else{

                box.innerHTML += text.charAt(index);

            }

            index++;

            setTimeout(typing,45);

        }

    }

    typing();

}

// =================================
// START BUTTON
// =================================

let startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.onclick = function(){

        showScreen("closeEyesScreen");

        let number = document.getElementById("countdownNumber");

        let count = 3;

        number.innerHTML = count;

        let timer = setInterval(()=>{

            count--;

            number.innerHTML = count;

            if(count <= 0){

                clearInterval(timer);

                setTimeout(()=>{

                    showScreen("giftScreen");

                },1000);

            }

        },1000);

    };

}

// =================================
// OPEN GIFT
// =================================

let openGiftBtn = document.getElementById("openGiftBtn");

if(openGiftBtn){

    openGiftBtn.onclick=function(){

        showScreen("birthdayScreen");

    };

}

console.log("Script Part 3.1 Loaded ❤️");
// =================================
// BLOW CANDLES
// =================================

let blowBtn = document.getElementById("blowCandles");

if(blowBtn){

    blowBtn.onclick = function(){

        // Hide candle flames
        document.querySelectorAll(".candle").forEach(candle=>{

            candle.style.opacity="0.3";

            candle.style.transform="scale(0.9)";

        });

        // Birthday Popup
        let popup=document.createElement("div");

        popup.className="birthday-popup";

        popup.innerHTML="🎉<br>Happy Birthday<br>Rishuu ❤️";

        document.body.appendChild(popup);

        // Remove popup after 3 seconds
        setTimeout(()=>{

            popup.remove();

            showScreen("letterScreen");

            typeWriter();

        },3000);

    };

}

// =================================
// LETTER → LOVE SCREEN
// =================================

function openLoveScreen(){

    showScreen("loveScreen");

}

// Automatically move after letter finishes
setTimeout(()=>{

    let letter=document.getElementById("letterScreen");

    if(letter && letter.classList.contains("active")){

        showScreen("loveScreen");

    }

},18000);

// =================================
// LOVE SCREEN → FINAL SCREEN
// =================================

let finalBtn=document.getElementById("finalSurpriseBtn");

if(finalBtn){

    finalBtn.onclick=function(){

        showScreen("finalScreen");

    };

}

console.log("Script Part 3.2 Loaded ❤️");
// =================================
// LETTER → LOVE SCREEN
// =================================

function goToLoveScreen(){

    showScreen("loveScreen");

}

setTimeout(()=>{

    let letter=document.getElementById("letterScreen");

    if(letter && letter.classList.contains("active")){

        showScreen("loveScreen");

    }

},18000);


// =================================
// MUSIC CONTROL
// =================================

let music=document.getElementById("birthdayMusic");
let musicBtn=document.getElementById("musicControl");

if(music && musicBtn){

    let playing=false;

    musicBtn.onclick=function(){

        if(playing){

            music.pause();
            musicBtn.innerHTML="🎵";
            playing=false;

        }else{

            music.play();
            musicBtn.innerHTML="⏸";
            playing=true;

        }

    };

}


// =================================
// FLOATING HEARTS
// =================================

function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart-particle";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(3+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,700);


// =================================
// FLOATING STARS
// =================================

function createStar(){

    let star=document.createElement("div");

    star.className="star";

    star.innerHTML="✨";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(createStar,500);


// =================================
// FLOATING ROSES
// =================================

function createRose(){

    let rose=document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"vw";

    document.body.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },8000);

}

setInterval(createRose,1200);


// =================================
// FINAL BUTTON
// =================================

let finalBtn=document.getElementById("finalSurpriseBtn");

if(finalBtn){

    finalBtn.onclick=function(){

        showScreen("finalScreen");

    };

}

console.log("Script Part 3.3 Loaded ❤️");
