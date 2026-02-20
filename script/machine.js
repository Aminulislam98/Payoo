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
  let transfer = document.getElementById("transfer-money-section");
  let getBonus = document.getElementById("get-bonus-section");
  let billPayment = document.getElementById("pay-bill-section");
  cashout.classList.add("hidden");
  addMoney.classList.add("hidden");
  transition.classList.add("hidden");
  transfer.classList.add("hidden");
  getBonus.classList.add("hidden");
  billPayment.classList.add("hidden");

  let selected = document.getElementById(id);
  selected.classList.remove("hidden");
}

// dialog modal;
function showSuccessPopup(message) {
  const modal = document.getElementById("my_modal_1");
  document.getElementById("success_title").innerText = "Success";
  document.getElementById("success_msg").innerText = message;

  modal.showModal();

  // optional auto-close
  setTimeout(() => modal.close(), 10000);
}
// dialog modal wrong;
function showSuccessPopupWrong(message) {
  const modal = document.getElementById("my_modal_1");
  document.getElementById("success_title").innerText = "Declined";
  document.getElementById("success_msg").innerText = message;

  modal.showModal();

  // optional auto-close
  setTimeout(() => modal.close(), 10000);
}
// dialog modal wrong;
function showSuccessPopupDeclined(message) {
  const modal = document.getElementById("my_modal_2");
  document.getElementById("declined_title").innerText = "Declined";
  document.getElementById("declined_msg").innerText = message;

  modal.showModal();

  // optional auto-close
  setTimeout(() => modal.close(), 3998);
}
// dialog modal wrong;
function showSuccessPopupPending() {
  const modal = document.getElementById("my_modal_3");
  document.getElementById("declined_title").innerText = "Payment in progress…";
  // document.getElementById("pending_msg").innerText = message;

  modal.showModal();

  // optional auto-close
  setTimeout(() => modal.close(), 3998);
}

// time
function getCurrentTime() {
  let CurrentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return CurrentTime;
}
