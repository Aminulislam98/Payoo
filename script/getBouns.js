document.getElementById("get-bonus").addEventListener("click", () => {
  let coupon = getInputValue("bonus-coupon-number");
  let currentBalance = getCurrentBalance();
  let newBalance = currentBalance + 50;
  let time = getCurrentTime();
  if (coupon != "WELCOME2026") {
    showSuccessPopupWrong(
      `Coupon not recognized. Enter WELCOME2026 to receive a bonus.`,
    );
    return;
  } else {
    setBalance(newBalance);
    showSuccessPopup(`
        Congratulations! WELCOME2026 added +$50 bonus.
        `);
    setBalance(newBalance);
    // set transaction
    let history = document.getElementById("transition-history");
    let newHistoryElement = document.createElement("div");
    newHistoryElement.innerHTML = `
          <div
            tabindex="0"
            class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
          >
            <div class="collapse-title font-semibold text-green-600">
              Coupon Reward Credited
            </div>
            <div class="collapse-content text-sm">
               <span class="text-yellow-600 font-semibold">🎉 Coupon unlocked!</span> You’ve received a <span class="text-green-600 font-bold">+$50</span> bonus in your account. Enjoy your day!
            </div>
            <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
          </div>
          `;
    history.append(newHistoryElement);
  }
});
