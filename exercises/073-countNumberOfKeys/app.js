function countNumberOfKeys(obj) {
    // your code here
    return Object.keys(obj).length;
}

let obj = {
  a: 1,
  b: 2,
  c: 3
};
let output = countNumberOfKeys(obj);
console.log(output); // --> 3