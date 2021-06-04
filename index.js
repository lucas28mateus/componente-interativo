let priceMap = {
    1: ["10k", "$8.00", "$6.00"],
    2: ["50k", "$12.00", "$9.00"],
    3: ["100k", "$16.00", "$12.00"],
    4: ["500k", "$24.00", "$18.00"],
    5: ["1M", "$35.00", "$26.25"],
};

function setPrice(value) {
    let pageViewElement = document.getElementById("page-view")
    let amountElement = document.getElementById("amount")
    let switchElement = document.querySelector(".discount-switch");

    pageViewElement.textContent = priceMap[value][0];

    if (switchElement.checked) {
        amountElement.textContent = priceMap[value][2];
    } else {
        amountElement.textContent = priceMap[value][1];
    }
}

document.getElementById("range-pageview").oninput = function () {
    const value = ((this.value - this.min) / (this.max - this.min)) * 100;

    sliderTrackBackground =
        "linear-gradient(to right, hsl(174, 77%, 80%)" +
        value + "%, hsl(224, 65%, 95%) " +
        value + "%, hsl(224, 65%, 95%) 100%";

    this.style.background = sliderTrackBackground;

    setPrice(this.value);
};

let switchElement = document.querySelector(".discount-switch");

switchElement.addEventListener("change", () => {
    rangeElement = document.getElementById("range-pageview");
    setPrice(rangeElement.value)
})