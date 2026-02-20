let loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", () => {
  let phoneNumberInput = document.getElementById("phoneNumber");
  let pinDigitInput = document.getElementById("pinDigit");
  let phoneNumber = phoneNumberInput.value;
  let phoneNumber1 = Number(phoneNumberInput.value);
  console.log(typeof phoneNumber);
  let pinDigit = pinDigitInput.value;
  if (!phoneNumber1) {
    alert("Invalid Number");
    return;
  } else {
    if (phoneNumber.length === 11 && pinDigit === "1234") {
      window.location.assign("homePage.html");
      phoneNumberInput.value = "";
      pinDigitInput.value = "";
      return;
    } else {
      alert("Login failed");
    }
  }
});
