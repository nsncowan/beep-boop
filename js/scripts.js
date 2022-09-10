const one = [1];
const two = [2];
const three = [3];
const countArray = [];


function mainCount(inputNumber) {
    for (let count = 0; count <= inputNumber; count++) {
        if(count.toString().includes("3")) {
            countArray.push("won't you be my neighbor?");
        }
        else if(count.toString().includes("2")) {
            countArray.push("boop");
        }
        else if(count.toString().includes("1")) {
            countArray.push("beep");
        }
        else {
            countArray.push(count.toString());
        } 
    }
console.log(countArray);
}
