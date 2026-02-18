// available balance
function getCurrentBalance() {
  let currentAvailableBalance = document.getElementById("available-balance");
  let availableValance = Number(currentAvailableBalance.innerText);
  return availableValance;
}
// get current Balance
function amountInput() {
  let amountNumberInput = document.getElementById("amount-number");
  let amountNumber = Number(amountNumberInput.value);
  return amountNumber;
}

function setBalance(value) {
  let currentAvailableBalance = document.getElementById("available-balance");
  currentAvailableBalance.innerText = value;
}
