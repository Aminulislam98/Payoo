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
// getInputValue
function getInputValue(value) {
  let input = document.getElementById(value);
  let inputValue = input.value;
  return inputValue;
}
// show only
function showOnly(id) {
  let cashout = document.getElementById("cashOut-section");
  let addMoney = document.getElementById("add-money-section");
  let transition = document.getElementById("transition-section");
  cashout.classList.add("hidden");
  addMoney.classList.add("hidden");
  transition.classList.add("hidden");

  let selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
function showSuccessPopup(message) {
  const modal = document.getElementById("my_modal_1");
  document.getElementById("success_title").innerText = "Success";
  document.getElementById("success_msg").innerText = message;

  modal.showModal();

  // optional auto-close
  setTimeout(() => modal.close(), 10000);
}
