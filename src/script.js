var body = document.querySelector("body");
var color1 = document.getElementById("c1");
var color2 = document.getElementById("c2");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var h3 = document.querySelector("h3");
const MAX_HEX_COLOR_INT = 16777216;

updateColor();

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
btn1.addEventListener("click", randomColor);
btn2.addEventListener("click", randomColor);

function updateColor() {
  body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
  h3.textContent = body.style.background + ";";
}

function randomColor(e) {
  if (e.target.id === "btn1") {
    color1.value = "#" + getRandomHex(0, MAX_HEX_COLOR_INT);
  } else if (e.target.id === "btn2") {
    color2.value = "#" + getRandomHex(0, MAX_HEX_COLOR_INT);
  }
  updateColor();
}

function getRandomHex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number.toString(16);
}