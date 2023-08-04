let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value != "") {
    nameOutput.textContent = event.currentTarget.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
