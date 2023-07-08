const images = ["img1.jpeg", "img2.jpeg"];

const theChosenImg = images[Math.floor(Math.random() * images.length)];

const container = document.getElementById("container");
const bgImage = document.createElement("img");

bgImage.src = `img/${theChosenImg}`;

container.appendChild(bgImage);