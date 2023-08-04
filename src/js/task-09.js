function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let bgColor = document.querySelector("body");
let colorField = document.querySelector(".color");
let btn = document.querySelector(".change-color");

btn.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  bgColor.style.backgroundColor = randomColor;
  colorField.textContent = randomColor;
});
