const images = ["img1.jpeg", "img2.jpeg"];

const theChosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${theChosenImg}`;

document.body.appendChild(bgImage);