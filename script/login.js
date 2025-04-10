// Email validation
const emailField = document.getElementById("email");
const emailError = document.getElementById("email-error");

emailField.addEventListener("blur", function () {
  const value = emailField.value;
  const isValid =
    value.includes("@") &&
    value.includes(".") &&
    /^[^@]+@[^@]+\.[^@]+$/.test(value);

  emailError.style.display = isValid ? "none" : "block";
});