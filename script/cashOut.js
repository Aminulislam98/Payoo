document.getElementById("withdraw-money").addEventListener("click", () => {
  let agentNumberInput = document.getElementById("agent-number");
  let agentNumber = Number(agentNumberInput.value);

  let availableValance = getCurrentBalance();
  let amountNumber = amountInput();

  let newBalance = availableValance - amountNumber;
  let pinNumberElement = document.getElementById("pinNumber-cashout");
  let pinNumber = pinNumberElement.value;
  const time = getCurrentTime();

  if (!agentNumber && agentNumber.length != 11) {
    showSuccessPopupWrong(`
        Invalid agent Number
        `);
    return;
  } else {
    if (!amountNumber) {
      showSuccessPopupWrong(`
        Invalid Amount
        `);
      return;
    } else {
      if (newBalance < 0) {
        showSuccessPopupWrong(`
        Invalid Amount
        `);
        return;
      } else {
        if (pinNumber === "1234") {
          setBalance(newBalance);

          let history = document.getElementById("transition-history");
          let newHistoryElement = document.createElement("div");
          newHistoryElement.innerHTML = `
          <div
            tabindex="0"
            class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
          >
            <div class="collapse-title font-semibold flex">
                 Cash Out <img class="w-6" src="assets/image.png" alt="" />
            </div>
            <div class="collapse-content text-sm">
              Cash Out <span class="text-red-600 font-bold"> -$${amountNumber}</span> · Successful · Date: ${new Date()}
            </div>
            <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
          </div>
          `;

          history.append(newHistoryElement);

          showSuccessPopup(
            `Cash Out successfully. Please check Transactions for details.`,
          );
          return;
        } else {
          alert("Invalid Pin");
          return;
        }
      }
    }
  }
});
