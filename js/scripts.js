// Utility Logic

// Business Logic
const num1 = "1"
const num2 = "2"
const num3 = "3"
const message1 = "beep"
const message2 ="boop"
const message3 = "won't you be my neighbor?"
const countArray = [];

function mainCount(inputNumber) {
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
                //console.log(countArray);
}
    
// UI Logic

function handleFormSubmission(e) {
    e.preventDefault();
    //const div = document.querySelector("div#output");
    //const p1 = document.querySelector("p#printOutput");
    const userInput = document.querySelector("input#number").value;
    //const output = mainCount(userInput);
    document.getElementById("span#printOutput").innerText = mainCount(userInput);
}

window.addEventListener("load", function() {
    document.querySelector("form#getNumber").addEventListener("submit", handleFormSubmission);
});