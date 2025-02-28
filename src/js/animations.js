"use strict";

let impossibleEl = document.getElementById("impossiblebutton");
let answerEl = document.getElementById("answer");
let inputEl = document.getElementById("who");
let tackEl = document.getElementById("tackbutton");
let answer2El = document.getElementById("answer2");
let njaaEl = document.getElementById("njaabutton");
let answer3El = document.getElementById("answer3");
let okeeejEl = document.getElementById("okeeejbutton");
let lookalikeEl = document.getElementById("lookalike");
let reactionEl = document.getElementById("reactionbuttons");
let reaction1El = document.getElementById("reaction1button");
let reaction2El = document.getElementById("reaction2button");
let answer4El = document.getElementById("answer4");


impossibleEl.addEventListener("mouseover", moveButton);
impossibleEl.addEventListener("mouseout", stayButton);

inputEl.addEventListener("keypress", function(name) {
    if (name.key === "Enter") {

        answerEl.innerHTML ="";
        tackEl.style.display = "none";

        answer2El.innerHTML ="";
        njaaEl.style.display = "none";

        answer3El.innerHTML ="";
        okeeejEl.style.display = "none";

        lookalikeEl.style.display = "none";
        reactionEl.style.display = "none";
        answer4El.innerHTML ="";



        answerText();
    }
});



function moveButton () {
    impossibleEl.style.animationPlayState = "running";
}

function stayButton () {
    impossibleEl.style.animationPlayState = "paused";
    impossibleEl.style.animationDelay = "100ms";
}

function answerText() {
    let inputName = inputEl.value.toLowerCase();


    if (inputName === "mattias") {
        answerEl.innerHTML = "Hej Mattias! Vad kul att det är du som rättar denna uppgift.";
        tackEl.style.display = "flex";


    } else if (inputName === "malin") {
        answerEl.innerHTML = "Hej Malin! Vad kul att det är du som rättar denna uppgift.";
        tackEl.style.display = "flex";
        tackEl.style.animationPlayState = "running";

    } else {
        answerEl.innerHTML = "Oj, vem är du och hur har du hittat hit?";
    }

    tackEl.addEventListener("click", function() {
        answerText2(inputName);
    });

}

function answerText2(inputName) {

    if (inputName === "mattias") {
        answer2El.innerHTML = "Det hade gått bra med Malin också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        njaaEl.style.display = "flex";
        njaaEl.style.animationPlayState = "running";


    } else if (inputName === "malin") {
        answer2El.innerHTML = "Det hade gått bra med Mattias också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        njaaEl.style.display = "flex";
        njaaEl.style.animationPlayState = "running";

    }


    njaaEl.addEventListener("click", function() {
        answerText3();
    });
}

function answerText3() {


    answer3El.innerHTML = "Jo kolla här. Är egentligen bara håret och glasögoen som skiljer!";
    okeeejEl.style.display = "flex";
    okeeejEl.style.animationPlayState = "running";


    okeeejEl.addEventListener("click", showLookalike);
}


function showLookalike() {
    lookalikeEl.style.display = "flex";
    reactionEl.style.display = "flex";
    reactionEl.style.animationPlayState = "running";


    reaction1El.addEventListener("click", answerText4happy);
    reaction2El.addEventListener("click", answerText4mad);
}

function answerText4happy() {
    answer4El.innerHTML = "Tjoho! Tack, ni är bäst! :)";

}

function answerText4mad() {
    answer4El.innerHTML = "Förlåt...det var bara på skoj :( Ni är inte alls lika!";
 
}