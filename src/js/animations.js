"use strict";

let impossibleEl = document.getElementById("impossiblebutton");

impossibleEl.addEventListener("mouseover", moveButton);
impossibleEl.addEventListener("mouseout", stayButton);


function moveButton () {
    console.log("working...");

    impossibleEl.style.animationPlayState = "running";

}

function stayButton () {
    console.log("also working...");

    impossibleEl.style.animationPlayState = "paused";
    impossibleEl.style.animationDelay = "100ms";

}