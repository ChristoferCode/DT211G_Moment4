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

let buttonDelay;
let words =[];


function typeText(text, element, delay) {

    words = text.split(" ");
    let index = 0;
    
    

    element.innerHTML ="";

    
    function typeWord() {
        if (index < words.length) {
            element.innerHTML += words[index] + " ";
            index++;
            setTimeout(typeWord, delay);
        }
        
    }
    console.log(words);

    
    buttonDelay = words.length *100;

    typeWord();

}

function showButton(element) {
    element.style.display = "flex";
}


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
        let text = "Hej Mattias! Vad kul att det är du som rättar denna uppgift.";

        typeText(text, answerEl, 100);
        console.log(buttonDelay);

        setTimeout(function() {
            showButton(tackEl); 
        }, buttonDelay);
      

    } else if (inputName === "malin") {
        let text = "Hej Malin! Vad kul att det är du som rättar denna uppgift.";
        typeText(text, answerEl, 100);

        setTimeout(function() {
            showButton(tackEl); 
        }, buttonDelay);

    } else {
        let text = "Oj, vem är du och hur har du hittat hit?";
        typeText(text, answerEl, 100);

    }


    tackEl.addEventListener("click", function() {
        answerText2(inputName);
    }, {once: true});
 
}

function answerText2(inputName) {

    njaaEl.style.display = "none";
    

    if (inputName === "mattias") {
        let text = "Det hade gått bra med Malin också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        typeText (text, answer2El, 100);

        setTimeout(function() {
            showButton(njaaEl); 
        }, buttonDelay);


    } else if (inputName === "malin") {
        let text = "Det hade gått bra med Mattias också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        typeText(text, answer2El, 100);

        setTimeout(function() {
            showButton(njaaEl); 
        }, buttonDelay);

    }

    njaaEl.addEventListener("click", function() {
        answerText3();
    }, {once: true});
}

function answerText3() {
    okeeejEl.style.display = "none";

    let text = "Jo kolla här. Är egentligen bara håret, skägget och glasögonen som skiljer!";
    typeText(text, answer3El, 100);

    setTimeout(function() {
        showButton(okeeejEl); 
    }, buttonDelay);


    okeeejEl.addEventListener("click", function() {
        showLookalike();
    }, {once: true});
}


function showLookalike() {
    lookalikeEl.style.display = "flex";
    reactionEl.style.display = "flex";


    reaction1El.addEventListener("click", function() {
        answerText4happy();
    });

    reaction2El.addEventListener("click", function() {
        answerText4mad();
    });
}

function answerText4happy() {
    let text = "Tjoho! Tack, ni är bäst! :)";
    typeText(text, answer4El, 100);

}

function answerText4mad() {
    let text = "Förlåt...det var bara på skoj :( Ni är inte alls lika!";
    typeText(text, answer4El, 100);

}





