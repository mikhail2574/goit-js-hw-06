let form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
    email.value = "";
    password.value = "";
  }
}

form.addEventListener("submit", handleSubmit);
