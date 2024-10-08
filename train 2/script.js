"use strict";

let inpValue = document.querySelector(".inp");
let submit = document.querySelector("#submit");
let result = document.querySelector(".result");

submit.addEventListener("click", function () {
  if (inpValue.value !== "") {
    result.textContent = inpValue.value;
  } else {
    alert("please enter value ");
  }
});
