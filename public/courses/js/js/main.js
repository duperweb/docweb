// selecting all the content class
var content = document.getElementsByClassName("contents");
var hideContent = document.getElementsByClassName("hiding-content");

for (var i = 0; i < content.length; i++) {
    content[i].addEventListener("click", displayShow);
    content[i].focus();
}

function displayShow() {
    'use strict';
    if (this.children[1].className == "hiding-content") {
        this.children[1].className = "";
    } else {
        this.children[1].className = "hiding-content";
    }
}


displayShow();
