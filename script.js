// =================================
// LOADING SCREEN
// =================================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        let loading=document.getElementById("loadingScreen");

        if(loading){
    loading.style.display="none";
}

let website=document.getElementById("website");

if(website){
    website.style.display="block";
}

        let first=document.querySelector(".screen");

        if(first){
            first.classList.add("active");
        }

    },4000);

});



// =================================
// TYPEWRITER EFFECT
// =================================

let text =
"Rishuu, you are a very special person in my life. ❤️ Thank you for every smile and every beautiful moment.";

let index=0;


function typeWriter(){

    let box=document.getElementById("typewriterText");

    if(box && index < text.length){

        box.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}


setTimeout(typeWriter,4500);



// =================================
// SCREEN CHANGE FUNCTION
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
// START BUTTON + COUNTDOWN
// =================================

let startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.onclick = function(){

        showScreen("closeEyesScreen");

        let number = document.getElementById("countdownNumber");

        let count = 3;

        number.innerHTML = count;


        let timer = setInterval(function(){

            count = count - 1;

            if(number){
                number.innerHTML = count;
            }


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
// CLOSE EYES COUNTDOWN
// =================================


    let number = document.getElementById("countdownNumber");

    let timer = setInterval(()=>{

        countdown--;

        if(number){
            number.innerHTML = countdown;
        }

        if(countdown === 0){

            clearInterval(timer);

            showScreen("giftScreen");

            countdown = 3;

        }

    },1000);

}
// =================================
// BUTTON SCREEN CHANGES
// =================================


let finalBtn = document.getElementById("finalSurpriseBtn");

if(finalBtn){

    finalBtn.addEventListener("click",()=>{

        showScreen("finalScreen");

    });

}



let secretBtn = document.getElementById("secretBtn");

if(secretBtn){

    secretBtn.addEventListener("click",()=>{

        let message=document.getElementById("hiddenMessage");


        if(message){

            message.style.display="block";

        }

    });

}



// =================================
// MUSIC CONTROL
// =================================


let musicBtn=document.getElementById("musicControl");

let musicPlaying=false;


// Apni music file ka naam yahan rakhna
let music=new Audio("birthday.mp3");

music.loop=true;


if(musicBtn){

    musicBtn.addEventListener("click",()=>{


        if(musicPlaying){

            music.pause();

            musicBtn.innerHTML="🎵";

            musicPlaying=false;


        }else{


            music.play();

            musicBtn.innerHTML="⏸️";

            musicPlaying=true;


        }


    });

}



// =================================
// FLOATING ROSES GENERATOR
// =================================


function createRose(){


    let rose=document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";


    rose.style.left=Math.random()*100+"vw";

    rose.style.animationDuration=(5+Math.random()*5)+"s";


    document.body.appendChild(rose);


    setTimeout(()=>{

        rose.remove();

    },10000);


}


setInterval(createRose,700);
// =================================
// FLOATING STARS GENERATOR
// =================================


function createStar(){


    let star=document.createElement("div");

    star.className="star";

    star.innerHTML="✨";


    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(2+Math.random()*3)+"s";


    document.body.appendChild(star);


    setTimeout(()=>{

        star.remove();

    },5000);


}


setInterval(createStar,500);



// =================================
// HEART PARTICLES
// =================================


function createHeart(){


    let heart=document.createElement("div");

    heart.className="heart-particle";

    heart.innerHTML="❤️";


    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(3+Math.random()*4)+"s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },7000);


}


setInterval(createHeart,800);



// =================================
// BUTTON GLOW EFFECT
// =================================


let buttons=document.querySelectorAll("button");


buttons.forEach(btn=>{


    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow="0 0 35px white";

    });



    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="0 0 20px rgba(255,255,255,0.4)";

    });


});



// =================================
// AUTO LOVE SCREEN
// =================================


setTimeout(()=>{


    let love=document.getElementById("loveScreen");


    if(love){

        love.classList.add("active");

    }


},12000);
// =================================
// MEMORY SCREEN BUTTON SUPPORT
// =================================


function openMemory(){

    showScreen("memoryScreen");

}


function openQuote(){

    showScreen("quoteScreen");

}


function openSecret(){

    showScreen("secretScreen");

}


function openThank(){

    showScreen("thankScreen");

}


// =================================
// OPEN SURPRISE BUTTON
// =================================

document.getElementById("startBtn").onclick = function(){

    showScreen("closeEyesScreen");

};
// =================================
// SMOOTH TOUCH SUPPORT
// =================================


document.addEventListener("touchstart",()=>{

    document.body.style.userSelect="none";

});



// =================================
// PAGE START EFFECT
// =================================


console.log("Birthday Surprise Website Loaded ❤️");



// =================================
// FINAL SECURITY CHECK
// =================================


window.addEventListener("beforeunload",()=>{

    window.scrollTo(0,0);

});


// =================================
// END OF JAVASCRIPT
// =================================


