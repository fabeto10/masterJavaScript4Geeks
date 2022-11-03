function convertDoubleSpaceToSingle(str) {
    // your code here
    let newStr = str.split('  ').join(' ');
    return newStr;
}
let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"