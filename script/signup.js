document.addEventListener("DOMContentLoaded", function () {
    const statusTime = document.getElementById("status-time");

    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const timeString = `${hours}:${minutes}`;
      statusTime.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // Show error message for invalid email
    const emailField = document.querySelector('.input-field[type="email"]');
    const errorMessage = document.querySelector(".error-message");

    emailField.addEventListener("blur", function () {
      if (
        !emailField.value.includes("@") ||
        !emailField.value.includes(".")
      ) {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    });
  });