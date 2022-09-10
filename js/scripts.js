const one = [1];
const two = [2];
const three = [3];
const countArray = [];


function mainCount(inputNumber) {
    for (let count = 0; count <= inputNumber; count++) {
       countArray.push(count.toString());
    }
console.log(countArray);
// this returns a count of strings

const filtered = countArray.filter(function(num) {
    return num.includes("2");
});
console.log(filtered);
// this returns a 2nd array of numbers that include the search digit

}


countArray.forEach(function(element) {
    if(three.includes(element)) {
        countArray.push("won't you be my neighbor?");
    }
    else if(two.includes(element)) {
        countArray.push("boop");
    }
    else if(one.includes(element)) {
        countArray.push("beep");
    }
    else {
        countArray.push(element);
    } 
console.log(countArray);
})


/*
    stringArray.forEach(function(number) {
        numArray = Array.from(number);
        
    })



    numArray.forEach(function(element) {
        if(three.includes(element)) {
            stringArray.push("won't you be my neighbor?");
        }
        else if(two.includes(element)) {
            stringArray.push("boop");
        }
        else if(one.includes(element)) {
            stringArray.push("beep");
        }
        else {
            stringArray.push(element);
        } 
    });
    console.log(numArray);
        //numArray.push(numbe
*/





/*
function findOnes(array, query) {
    return array.filter((element) =>
    element.includes(query));
}
*/


