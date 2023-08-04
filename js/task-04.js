let counterValue = 0;
let incrementBtn = document.querySelector('[data-action="increment"]');
let decrementBtn = document.querySelector('[data-action="decrement"]');

let valueBtn = document.getElementById("value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueBtn.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
});
