function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let aux = [ word1, word2, word3];
    let str = aux[0];
    for( let i of aux){
        if( i.length < str.length ) str = i;
    };
    return str;
};
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'