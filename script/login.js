// Login form validation
const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const userAccountInput = document.getElementById("Acount-nunber").value;
    const userPinInput = document.getElementById("pin").value;
    if (userAccountInput.length === 11) {
      if (Number(userPinInput) === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Invalid account number or PIN.");
      }
    }
  });
