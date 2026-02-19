document.getElementById("add-money").addEventListener("click", () => {
  let selectedBank = getInputValue("add-money-bank");
  let bankNumber = getInputValue("bank-account-number");
  let addAmount = getInputValue("add-amount");
  let currentBalance = getCurrentBalance();
  let newBalance = Number(addAmount) + currentBalance;
  let pin = getInputValue("pinNumber-add-money");
  if (selectedBank === "Select Bank") {
    alert("Please select a bank method!");
    return;
  } else {
    if (bankNumber.length != 11) {
      alert("Invalid Bank Account!");
      return;
    } else {
      if (pin === "1234") {
        alert(`Money added from ${selectedBank} at ${new Date()}`);
        setBalance(newBalance);
        return;
      } else {
        alert("Wrong Pin! Try again.");
        return;
      }
    }
  }
});
