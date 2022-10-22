let slider = document.getElementById("minmax-range");
let checkBox = document.querySelector("#default-toggle");
let view1 = document.querySelector(".viewCount");
let price1 = document.querySelector(".priceCount");
let view2 = document.querySelector(".viewCount2");
let price2 = document.querySelector(".priceCount2");

function calculate() {
    if (slider.value == 1) {
        if (checkBox.checked == true) {
            view1.innerHTML = "10K PAGEVIEWS";
            price1.innerHTML = "$72.00";
            view2.innerHTML = "10K PAGEVIEWS";
            price2.innerHTML = "$72.00";
        }
        if (checkBox.checked == false) {
            view1.innerHTML = "10K PAGEVIEWS";
            price1.innerHTML = "$8.00";
            view2.innerHTML = "10K PAGEVIEWS";
            price2.innerHTML = "$8.00";
        }
}

if (slider.value == 2) {
        if (checkBox.checked == true) {
            view1.innerHTML = "50K PAGEVIEWS";
            price1.innerHTML = "$108.00";
            view2.innerHTML = "50K PAGEVIEWS";
            price2.innerHTML = "$108.00";
        }
        if (checkBox.checked == false) {
            view1.innerHTML = "50K PAGEVIEWS";
            price1.innerHTML = "$12.00";
            view2.innerHTML = "50K PAGEVIEWS";
            price2.innerHTML = "$12.00";
        }
}

if (slider.value == 3) {
        if (checkBox.checked == true) {
            view1.innerHTML = "100K PAGEVIEWS";
            price1.innerHTML = "$144.00";
            view2.innerHTML = "100K PAGEVIEWS";
            price2.innerHTML = "$144.00";
        }
        if (checkBox.checked == false) {
            view1.innerHTML = "100K PAGEVIEWS";
            price1.innerHTML = "$16.00";
            view2.innerHTML = "100K PAGEVIEWS";
            price2.innerHTML = "$16.00";
        }
}

if (slider.value == 4) {
        if (checkBox.checked == true) {
            view1.innerHTML = "500k PAGEVIEWS";
            price1.innerHTML = "$216.00";
            view2.innerHTML = "500k PAGEVIEWS";
            price2.innerHTML = "$216.00";
        }
        if (checkBox.checked == false) {
            view1.innerHTML = "500k PAGEVIEWS";
            price1.innerHTML = "$24.00";
            view2.innerHTML = "500k PAGEVIEWS";
            price2.innerHTML = "$24.00";
        }
}

if (slider.value == 5) {
        if (checkBox.checked == true) {
            view1.innerHTML = "1M PAGEVIEWS";
            price1.innerHTML = "$324.00";
            view2.innerHTML = "1M PAGEVIEWS";
            price2.innerHTML = "$324.00";
        }
        if (checkBox.checked == false) {
            view1.innerHTML = "1M PAGEVIEWS";
            price1.innerHTML = "$36.00";
            view2.innerHTML = "1M PAGEVIEWS";
            price2.innerHTML = "$36.00";
        }
}
}

slider.addEventListener("input", function() {
    calculate()
});
checkBox.addEventListener("change", function() {
    calculate()
});