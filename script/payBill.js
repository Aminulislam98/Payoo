document.getElementById("pay-bill").addEventListener("click", () => {
  let selectBank = getInputValue("select-bank-pay-bill");
  let billerAccountNumber = getInputValue("biller-account-number");
  let amount = getInputValue("amount-to-pay");
  let pin = getInputValue("bill-pin");
  let currentBalance = getCurrentBalance();
  let newBalance = currentBalance - amount;
  let time = getCurrentTime();

  if (selectBank === "Select Bank") {
    showSuccessPopupWrong(`
        You haven’t selected a bank method yet—please choose one to proceed.
        `);
  } else {
    if (
      billerAccountNumber.length < 5 &&
      typeof billerAccountNumber !== "number"
    ) {
      showSuccessPopupWrong(`
        The biller account number (${billerAccountNumber}) you entered isn’t valid. Please review it and re-enter the correct number.
        `);
    } else {
      if (!newBalance) {
        showSuccessPopupWrong(`
        Invalid Amount
        `);
      } else {
        if (newBalance < 0) {
          showSuccessPopupWrong(`
        Insufficient balance. You need an additional $${Math.abs(newBalance)} to complete this transaction.
        `);
        } else {
          if (pin === "1234") {
            setBalance(newBalance);
            showSuccessPopup(`Bill paid successfully. Thank you.`);
            //   setting transaction
            let history = document.getElementById("transition-history");
            let newHistoryElement = document.createElement("div");
            newHistoryElement.innerHTML = `
          <div
            tabindex="0"
            class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
          >
            <div class="collapse-title font-semibold flex">
                Bill Payment Confirmed <img class="w-6" src="assets/image.png" alt="" />
            </div>
            <div class="collapse-content text-sm">
                Your bill payment was completed successfully. Account Name: ${selectBank}. Biller Account Number: ${billerAccountNumber}. Date: ${new Date()}
            </div>
            <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
          </div>
          `;
            history.append(newHistoryElement);
          }
        }
      }
    }
  }
});
