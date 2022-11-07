function getLengthOfShortestElement(arr) {
    // your code here
    let aux = [];
    if( arr.length === 0 ) return 0;
    for( let i of arr ){
        aux.push(i.length);
    };
    return Math.min.apply(null, aux);
};
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3