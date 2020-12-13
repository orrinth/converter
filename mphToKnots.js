const numInput = document.querySelector("#number-input");
const topDisplay = document.querySelector("#display-top span");
const bottomDisplay = document.querySelector("#display-bottom span");

numInput.value = "";

numInput.addEventListener("input", function() {
    topDisplay.textContent = numInput.value;
    if (numInput.value != "") { 
        bottomDisplay.textContent = (numInput.value / 1.151).toFixed(2);
    } else {
        topDisplay.textContent = "0";
        bottomDisplay.textContent = "0";
    }
});
