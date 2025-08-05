const rangInputValue = document.querySelectorAll(".range-slider input");

let priceGap = 500;


const priceInputMinValue = document.getElementById("minimum");
const priceInputMaxValue = document.getElementById("maximum");
const minSlider = document.getElementById("min-range");
const maxSlider = document.getElementById("max-range");

priceInputMinValue.value = minSlider.value;
priceInputMaxValue.value = maxSlider.value;

priceInputMinValue.addEventListener('input', (event) => {
    console.log("Input value changed:", event.target.value);

    let min = event.target.value;

    console.log(min);
    console.log(minSlider)
    console.log(minSlider.value)
});

console.log(rangInputValue);
console.log(priceInputMinValue);