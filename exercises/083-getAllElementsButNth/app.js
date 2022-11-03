function getAllElementsButNth(array, n) {
    // Write your function here
    // return array.filter((item, index) => index !== n);
    return array.slice(0, n).concat(array.slice(n+1, array.length)); 
};
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']