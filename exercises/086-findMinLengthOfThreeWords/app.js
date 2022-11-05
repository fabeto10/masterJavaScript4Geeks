// Write your function here

function findMinLengthOfThreeWords(str, str0, str1){
    let result = Math.min(str.length, str0.length, str1.length)
    return result;
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1