function isEvenWithoutModulo(num) {
    // your code here
    let result = num & 1; 
    if( !result ){
        return true;
    } else return false;
};
let output = isEvenWithoutModulo(8);
console.log(output); // --> true