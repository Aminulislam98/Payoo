document.getElementById("send-money-transfer").addEventListener("click", () => {
  let name = getInputValue("holder-name");
  let userAccountNumber = getInputValue("user-account-number");
  let last4 = userAccountNumber.slice(-4);
  let userAccountNumber1 = Number(getInputValue("user-account-number"));
  let amount = Number(getInputValue("transfer-amount"));
  let pin = getInputValue("transfer-pin");
  let time = getCurrentTime();

  let currentBalance = getCurrentBalance();
  console.log(typeof currentBalance);

  let newBalance = currentBalance - amount;
  if (!name) {
    showSuccessPopupWrong(`Holder name did not match`);
    return;
  } else {
    if (!userAccountNumber1) {
      showSuccessPopupWrong(`Invalid Account Number`);
      return;
    } else {
      if (userAccountNumber.length != 11) {
        showSuccessPopupWrong(`Invalid Account Number`);
        return;
      } else {
        if (!amount) {
          showSuccessPopupWrong(`The amount is not valid`);
        } else {
          if (amount && pin === "1234") {
            showSuccessPopupPending();
            setTimeout(() => {
              // code you want to run after 4 seconds
              if (newBalance < 0) {
                showSuccessPopupDeclined(`
                Payment declined. See more details in Transactions.
                `);
                let history = document.getElementById("transition-history");
                let newHistoryElement = document.createElement("div");
                newHistoryElement.innerHTML = `
                <div
                  tabindex="0"
                  class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
                >
                  <div class="collapse-title font-semibold flex text-red-600">
                      Declined 
                  </div>
                  <div class="collapse-content text-sm">
                    Transfer failed: your balance is too low. Please add $${Math.abs(newBalance)} and try again. Date: ${new Date()}.
                  </div>
                  <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
                </div>
                `;
                history.append(newHistoryElement);

                return;
              } else {
                if (newBalance >= 0 && pin === "1234") {
                  setBalance(newBalance);
                  showSuccessPopup(
                    `Transfer successful! $${amount} sent to account(****${last4}). New balance: $${newBalance}.`,
                  );

                  let history = document.getElementById("transition-history");
                  let newHistoryElement = document.createElement("div");
                  newHistoryElement.innerHTML = `
                  <div
                    tabindex="0"
                    class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
                  >
                    <div class="collapse-title font-semibold flex">
                        Transfer Sent <img class="w-6" src="assets/image.png" alt="" />
                    </div>
                    <div class="collapse-content text-sm">
                      Transfer successful.<span class="text-black font-bold"> $${amount}</span> has been sent to ${name} (****${last4}) Date: ${new Date()}.
                    </div>
                    <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
                  </div>
                  `;
                  history.append(newHistoryElement);
                }
              }
            }, 4000);
          } else {
            showSuccessPopupWrong(`Invalid Pin Number`);
          }
        }
      }
    }
  }
});
