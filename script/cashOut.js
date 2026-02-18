document.getElementById("withdraw-money").addEventListener("click", () => {
  let agentNumberInput = document.getElementById("agent-number");
  let agentNumber = agentNumberInput.value;

  let availableValance = getCurrentBalance();
  let amountNumber = amountInput();

  let newBalance = availableValance - amountNumber;
  let pinNumberElement = document.getElementById("pinNumber-cashout");
  let pinNumber = pinNumberElement.value;

  if (agentNumber.length != 11) {
    alert("Invalid agent Number");
    return;
  } else {
    if (newBalance < 0) {
      alert("Invalid Amount");
      return;
    } else {
      if (pinNumber === "1234") {
        setBalance(newBalance);
        alert("CashOut Successful!");
        return;
      } else {
        alert("Invalid Pin");
        return;
      }
    }
  }
});
