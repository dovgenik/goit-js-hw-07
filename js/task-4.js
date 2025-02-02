const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const inputFromForm = {
    email: "",
    password: "",
  };
  const form = event.target;
  event.preventDefault();

  inputFromForm.email = form.elements.email.value.trim();
  inputFromForm.password = form.elements.password.value.trim();

  if (inputFromForm.email === "" || inputFromForm.password === "") {
    alert("All form fields must be filled in");
  } else {
    form.reset();
    return console.log(inputFromForm);
  }
}
