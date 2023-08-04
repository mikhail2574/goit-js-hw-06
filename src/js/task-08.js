let submitBtn = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    event.currentTarget.submit();
  }
}

submitBtn.addEventListener("submit", handleSubmit);
