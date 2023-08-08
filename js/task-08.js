let form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(email.value, password.value);
    email.value = "";
    password.value = "";
  }
}

form.addEventListener("submit", handleSubmit);
