// Utility Logic

// Business Logic
const num1 = "1"
const num2 = "2"
const num3 = "3"
const message1 = "beep"
const message2 ="boop"
const message3 = "won't you be my neighbor?"


function mainCount(inputNumber) {
    let countArray = [];
    for (let count = 0; count <= inputNumber; count++) {
        if(count.toString().includes(num3)) {
            countArray.push(message3);
        }
        else if(count.toString().includes(num2)) {
            countArray.push(message2);
        }
        else if(count.toString().includes(num1)) {
            countArray.push(message1);
        }
        else {
            countArray.push(count.toString());
        } 
    }
    return countArray.join("\n");
}
    
// UI Logic
function handleFormSubmission(e) {
    e.preventDefault();
    const userInput = parseInt(document.querySelector("input#number").value);
    let output = mainCount(userInput);
    document.getElementById("output").innerText = output;
    document.getElementById("getNumber").reset();
}

window.addEventListener("load", function() {
    document.querySelector("form#getNumber").addEventListener("submit", handleFormSubmission);
});