const images = ["Img/0.jpeg", "Img/1.jpeg", "Img/2.jpeg","Img/3.jpeg","Img/4.jpeg","Img/5.jpeg","Img/6.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = chosenImage;


const imgBox = document.querySelector("#profile-content");
imgBox.appendChild(bgImage);