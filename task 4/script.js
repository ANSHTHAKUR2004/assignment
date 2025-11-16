const form = document.getElementById("registerForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateName() {
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameField.classList.add("invalid");
    nameField.classList.remove("valid");
    return false;
  } else {
    nameError.textContent = "";
    nameField.classList.add("valid");
    nameField.classList.remove("invalid");
    return true;
  }
}

function validateEmail() {
  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    return false;
  } else if (!emailField.value.includes("@")) {
    emailError.textContent = "Email must include '@'.";
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    return false;
  } else {
    emailError.textContent = "";
    emailField.classList.add("valid");
    emailField.classList.remove("invalid");
    return true;
  }
}

function validatePassword() {
  if (passwordField.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    passwordField.classList.add("invalid");
    passwordField.classList.remove("valid");
    return false;
  } else if (passwordField.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    passwordField.classList.add("invalid");
    passwordField.classList.remove("valid");
    return false;
  } else {
    passwordError.textContent = "";
    passwordField.classList.add("valid");
    passwordField.classList.remove("invalid");
    return true;
  }
}

// Validate on submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent refresh
  
  const nameValid = validateName();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (nameValid && emailValid && passwordValid) {
    alert("Form submitted successfully!"); // or handle success
    form.reset();
    nameField.classList.remove("valid");
    emailField.classList.remove("valid");
    passwordField.classList.remove("valid");
  }
});

// Real-time validation (bonus usability)
nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);
