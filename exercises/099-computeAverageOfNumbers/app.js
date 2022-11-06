// Write your function here !
function computeAverageOfNumbers(arr) {
    if( arr.length === 0 ){
        return 0;
    };
    let aux = 0;
    for( let i of arr ){
        aux += i
    };
    return aux/arr.length;
};

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3