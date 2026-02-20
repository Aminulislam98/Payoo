document.getElementById("add-money").addEventListener("click", () => {
  let selectedBank = getInputValue("add-money-bank");
  let bankNumber = getInputValue("bank-account-number");
  let bankNumber1 = Number(getInputValue("bank-account-number"));
  const last4 = bankNumber.slice(-4);
  let addAmount = getInputValue("add-amount");
  let currentBalance = getCurrentBalance();
  let newBalance = Number(addAmount) + currentBalance;
  let pin = getInputValue("pinNumber-add-money");
  const time = getCurrentTime();
  console.log(time);
  if (selectedBank === "Select Bank") {
    showSuccessPopupWrong(`
        Please select a bank method!
        `);
    return;
  } else {
    if (!bankNumber1) {
      showSuccessPopupWrong(`
        Invalid Bank Account!
        `);
      return;
    } else {
      if (bankNumber.length != 11) {
        showSuccessPopupWrong(`
        Invalid Bank Account!
        `);
        return;
      } else {
        if (!newBalance) {
          showSuccessPopupWrong(`
        Invalid Amount
        `);
        } else {
          if (newBalance && pin === "1234") {
            showSuccessPopupPending();
            setTimeout(() => {
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
                    Top-up failed: your balance is too low. Please add $${Math.abs(newBalance)} and try again. Date: ${new Date()}.
                  </div>

                  
                  <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
                </div>
                `;
                history.append(newHistoryElement);
                // showSuccessPopup(
                //   `Money added successfully. Please check Transactions for details.`,
                // );
                return;
              } else {
                if (newBalance >= 0 && pin === "1234") {
                  setBalance(newBalance);
                  showSuccessPopup(
                    `Top-up successful. $${addAmount} added. View Transactions for details.`,
                  );

                  let history = document.getElementById("transition-history");
                  let newHistoryElement = document.createElement("div");
                  newHistoryElement.innerHTML = `
                  <div
                    tabindex="0"
                    class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
                  >
                    <div class="collapse-title font-semibold flex">
                        Top-up successful <img class="w-6" src="assets/image.png" alt="" />
                    </div>
                    <div class="collapse-content text-sm">
                    <span class="text-green-600 font-bold"> +$${addAmount}</span> Money added successfully from ${selectedBank} ****${last4} · Date: ${new Date()}
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
