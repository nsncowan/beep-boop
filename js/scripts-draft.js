
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

function includes1(int) {
    return int.includes("1")
}
ones = countArray.filter(includes1);
console.log(ones);
// this ALSO returns a 2nd array of numbers that include the search digit

}


