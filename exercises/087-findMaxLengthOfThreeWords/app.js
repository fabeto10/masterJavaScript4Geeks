// Write your function here

function findMaxLengthOfThreeWords(a, b, c){
    let result = Math.max(a.length, b.length, c.length)
    return result;
};

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3