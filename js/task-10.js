function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let creating = document.querySelector("[data-create]");
let deleting = document.querySelector("[data-destroy]");
let inputValue = document.querySelector("[type='number']");
let container = document.getElementById("boxes");

creating.addEventListener("click", (event) => {
  for (let i = 0; i < parseInt(inputValue.value); i++) {
    let box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    container.append(box);
  }
});

function destroyBoxes() {
  container.innerHTML = "";
}

deleting.addEventListener("click", destroyBoxes);
