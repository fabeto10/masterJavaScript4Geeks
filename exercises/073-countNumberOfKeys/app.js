function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length;
}

let obj = {
    a: 5,
    b: 4,
    c: 2,
    d: 1
};
let output = countNumberOfKeys(obj);
console.log(output); // --> 3