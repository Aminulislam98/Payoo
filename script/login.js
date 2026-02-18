let loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", () => {
  let phoneNumberInput = document.getElementById("phoneNumber");
  let pinDigitInput = document.getElementById("pinDigit");
  let phoneNumber = phoneNumberInput.value;
  let pinDigit = pinDigitInput.value;

  if (phoneNumber.length === 11 && pinDigit.length === 4) {
    alert("Logged in Successfully");
    window.location.assign("homePage.html");
    phoneNumberInput.value = "";
    pinDigitInput.value = "";
    return;
  } else {
    alert("Login Failed");
    return;
  }
});
