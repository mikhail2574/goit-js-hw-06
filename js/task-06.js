let validationForm = document.getElementById("validation-input");

validationForm.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= 6) {
    validationForm.setAttribute("class", "valid");
  } else {
    validationForm.setAttribute("class", "invalid");
  }
});
