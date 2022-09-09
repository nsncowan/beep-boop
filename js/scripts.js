
const one = [1];
const two = [2];
const three = [3];
const countArray = [];
const newCount = [];

function mainCount(inputNumber) {
    for (let count = 0; count <= inputNumber; count++) {
        countArray.push(count); 
    } 
    const stringArray = countArray.map(function(element) {
        return element.toString();
      })
    
    stringArray.forEach(function(number) {
        let numArray = Array.from(number);
        numArray.push(number);
        console.log(numArray);
    })
}

/* if(three.includes(number)) {
            newCount.push("won't you be my neighbor?");
        }
        else if(two.includes(number)) {
            newCount.push("boop");
        }
        else if(one.includes(number)) {
            newCount.push("beep");
        }
        else {
            newCount.push(number);
        } */

  // the code above is the basic counting function returning an array of strings
/*
function findOnes(array, query) {
    return array.filter((element) =>
    element.includes(query));
}
*/


