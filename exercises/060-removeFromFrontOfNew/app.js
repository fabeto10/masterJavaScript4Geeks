let newArr = [];
function removeFromFrontOfNew(arr) {
    // your code here
    arr.shift();
    return arr;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]