
const one = [1];
const two = [2];
const three = [3];
const countArray = [];
const newCount = [];

function mainCount(inputNumber) {
    for (let count = 0; count <= inputNumber; count++) {
        countArray.push(count); 
    }



countArray.forEach(function(number) {
    let numArray = Array.from(number);
    numArray.push(number);
    console.log(numArray);

// lines 16-18 resulted in each number being pushed into its own array when passed into mainCount().
// the numbers WERE NOT split e.g : [9], [10], [11]

    if(three.includes(number)) {
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
    }
})
return newCount;
}


