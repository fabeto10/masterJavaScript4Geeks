function removeFromBackOfNew(array) {
  // your code here
    array.pop();
    return array;   
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]