function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let creating = document.querySelector("[data-create]");
let deleting = document.querySelector("[data-destroy]");
let inputValue = document.querySelector("[type='number']");
let container = document.getElementById("boxes");

let multiValue = 0;

creating.addEventListener("click", (event) => {
  for (let i = 0; i < parseInt(inputValue.value); i++) {
    let box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + 10 * (multiValue + i) + "px";
    box.style.height = 30 + 10 * (multiValue + i) + "px";
    container.append(box);
  }
  multiValue += parseInt(inputValue.value);
});

function destroyBoxes() {
  container.innerHTML = "";
  inputValue.innerHTML = "";
  multiValue = 0;
}

deleting.addEventListener("click", destroyBoxes);
