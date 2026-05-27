const service = document.getElementById("service");
const amountInput = document.getElementById("qty");
const priceInput = document.getElementById("totalPrice");

let amount = 0;

function updatePrice() {
    const selectedOption = service.options[service.selectedIndex];
    const servicePrice = Number(selectedOption.dataset.price);

    const total = servicePrice * amount;

    priceInput.value = total + " €";
}

function changeAmount(change) {
    amount += change;

    if (amount < 0) {
        amount = 0;
    }

    amountInput.value = amount;

    updatePrice();
}


service.addEventListener("change", updatePrice);

document.getElementById("plusBtn").addEventListener("click", function () {
    changeAmount(1);
});

document.getElementById("minusBtn").addEventListener("click", function () {
    changeAmount(-1);
});