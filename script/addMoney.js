document.getElementById("add-money").addEventListener("click", () => {
  let selectedBank = getInputValue("add-money-bank");
  let bankNumber = getInputValue("bank-account-number");
  const last4 = bankNumber.slice(-4);
  let addAmount = getInputValue("add-amount");
  let currentBalance = getCurrentBalance();
  let newBalance = Number(addAmount) + currentBalance;
  let pin = getInputValue("pinNumber-add-money");
  const time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  if (selectedBank === "Select Bank") {
    alert("Please select a bank method!");
    return;
  } else {
    if (bankNumber.length != 11) {
      alert("Invalid Bank Account!");
      return;
    } else {
      if (pin === "1234") {
        let history = document.getElementById("transition-history");
        let newHistoryElement = document.createElement("div");
        newHistoryElement.innerHTML = `
          <div
            tabindex="0"
            class="collapse collapse-open bg-base-100 border-base-300 border mb-2 "
          >
            <div class="collapse-title font-semibold text-green-600">
              Money Added
            </div>
            <div class="collapse-content text-sm">
              <span class="text-green-600 font-bold"> +$${addAmount}</span> Added Successfully from ${selectedBank} ••••${last4} · ${new Date()}
            </div>
            <div class="text-right text-sm text-green-600 pr-5 pb-2">${time}</div>
          </div>
          `;

        history.append(newHistoryElement);

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
