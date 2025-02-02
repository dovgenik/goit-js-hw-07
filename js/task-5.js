function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor(){
let randomColor= getRandomHexColor()
  bodyColor.style.backgroundColor= randomColor;
  colorTextFormat.textContent= randomColor;
}

const bodyColor = document.querySelector("body");
const colorTextFormat= document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", changeColor);

console.log(buttonChangeColor);

