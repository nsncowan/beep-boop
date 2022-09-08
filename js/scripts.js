
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


