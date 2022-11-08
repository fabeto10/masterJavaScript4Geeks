function isOddWithoutModulo(num) {
    // your code here
    let result = num & 1;
    if( result ){
        return true;
    } else return false;
};
let output = isOddWithoutModulo(17);
console.log(output); // --> true