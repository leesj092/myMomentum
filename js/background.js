const images = ["img1.jpeg", "img2.jpeg"];

const theChosenImg = images[Math.floor(Math.random() * images.length)];

const body = document.getElementById("background");
const bgImage = document.createElement("img");

bgImage.src = `img/${theChosenImg}`;

body.appendChild(bgImage);