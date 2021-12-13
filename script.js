const questionRadioBtn = document.querySelector("#question");
const commentRadioBtn = document.querySelector("#comment");
const hiringRadioBtn = document.querySelector("#hiring");
hideRateInput();


questionRadioBtn.addEventListener("click", (value) => {
    hideRateInput();
});

commentRadioBtn.addEventListener("click", (value) => {
    hideRateInput();
});

hiringRadioBtn.addEventListener("click", (value) => {
    showRateInput();
});

function showRateInput() {
    const rate = document.querySelector("#rate");
    const rateLabel = document.querySelector("label[for='rate']");
    rate.style.display = "block";
    rateLabel.style.display = "block";
}

function hideRateInput() {
    const rate = document.querySelector("#rate");
    const rateLabel = document.querySelector("label[for='rate']");
    rate.style.display = "none";
    rateLabel.style.display = "none";
}