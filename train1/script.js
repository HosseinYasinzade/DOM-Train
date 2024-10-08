"use strict";

let firstPtag = document.querySelector(".paragraph-1");
let secondePtag = document.querySelector(".paragraph-2");
let thirdPtag = document.querySelector(".paragraph-3");

// part-1
firstPtag.textContent = "First paragraph has been updated!";

// part-2
secondePtag.textContent = "Paragraph 2";
thirdPtag.textContent = "Paragraph 3";

// part 3
document.querySelectorAll("p").forEach((e) => (e.style.color = "#00BCD4"));
