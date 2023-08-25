"use strict";

const randomNumber1 = Math.trunc(Math.random() * 6 + 1);
const randomNumber2 = Math.trunc(Math.random() * 6 + 1);

const image1 = "/pics/d" + randomNumber1 + ".png";
const image2 = "/pics/d" + randomNumber2 + ".png";
console.log(image2, image1);

document.querySelector("#die1").setAttribute("src", image1);
document.querySelector("#die2").setAttribute("src", image2);