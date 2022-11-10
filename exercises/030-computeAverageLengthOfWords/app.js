// Write your function here

function computeAverageLengthOfWords(w1, w2){
    let average = (w1.length + w2.length)/2;
    return average;
};

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6