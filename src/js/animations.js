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
let closinggateEl = document.getElementById("closinggate");


let buttonDelay;
let words =[];

let answerTextFlag = false;
let answerText2Flag = false;
let answerText3Flag = false;
let showLokalikeFlag = false;
let answerText4Flag = false;


function typeText(text, element, delay) {
    
    words = text.split(" ");
    let index = 0;
    
    console.log(words);

    element.innerHTML ="";

    
    function typeWord() {
        if (index < words.length) {
            element.innerHTML += words[index] + " ";
            index++;
            setTimeout(typeWord, delay);
        }
        
    }

    console.log("nu fortsätter funktionen...");


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
        
        answerTextFlag = false;
        answerText2Flag = false;
        answerText3Flag = false;
        answerText4Flag = false;

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

    if (inputName === "mattias" && answerText2Flag == false) {
        let text = "Hej Mattias! Vad kul att det är du som rättar denna uppgift.";
        typeText(text, answerEl, 100);
        console.log(buttonDelay);
        answerTextFlag = true;

        setTimeout(function() {
            showButton(tackEl); 
        }, buttonDelay);
      

    } else if (inputName === "malin" && answerTextFlag == false) {
        let text = "Hej Malin! Vad kul att det är du som rättar denna uppgift.";
        typeText(text, answerEl, 100);
        answerTextFlag = true;

        setTimeout(function() {
            showButton(tackEl); 
        }, buttonDelay);

    } else {
        let text = "Oj, vem är du och hur har du hittat hit?";
        typeText(text, answerEl, 100);

    }


    tackEl.addEventListener("click", function() {
        answerText2(inputName);
    });
 
}

function answerText2(inputName) {

    njaaEl.style.display = "none";
    

    if (inputName === "mattias" && answerText2Flag == false) {
        let text = "Det hade gått bra med Malin också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        typeText (text, answer2El, 100);
        answerText2Flag = true;

        setTimeout(function() {
            showButton(njaaEl); 
        }, buttonDelay);


    } else if (inputName === "malin" && answerText2Flag == false) {
        let text = "Det hade gått bra med Mattias också såklart. Ni är ganska lika trots allt. Har du tänkt på det?";
        typeText(text, answer2El, 100);
        answerText2Flag = true;

        setTimeout(function() {
            showButton(njaaEl); 
        }, buttonDelay);

    }

    njaaEl.addEventListener("click", function() {
        answerText3();
    });
}

function answerText3() {
    okeeejEl.style.display = "none";

    if (answerText3Flag == false) {
        let text = "Jo kolla här. Är egentligen bara håret, skägget och glasögonen som skiljer!";
        typeText(text, answer3El, 100);
        answerText3Flag = true;

        setTimeout(function() {
            showButton(okeeejEl); 
        }, buttonDelay);
    }


    okeeejEl.addEventListener("click", function() {
        showLookalike();
    });
}


function showLookalike() {
    if (showLokalikeFlag == false) {
        lookalikeEl.style.display = "flex";
        reactionEl.style.display = "flex";
    }


    reaction1El.addEventListener("click", function() {
        answerText4happy();
    });

    reaction2El.addEventListener("click", function() {
        answerText4mad();
    });
}

function answerText4happy() {
    if (answerText4Flag == false) {
        let text = "Tjoho! Tack, ni är bäst! :)";
        typeText(text, answer4El, 100);
        closinggateEl.style.animationPlayState = "paused";
    }
}

function answerText4mad() {
    if (answerText4Flag == false) {
        let text = "Förlåt...det var bara på skoj :( Ni är inte alls lika!";
        typeText(text, answer4El, 100);
        closinggateEl.style.animationPlayState = "running";
    }
}





