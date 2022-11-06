function filterOddLengthWords(words) {
    // your code here
    if( words.length === 0 ){
        return [];
    };
    let aux = [];
    for( let i of words ){
        if( i.length % 2 !== 0 ){
            aux.push(i);
        };
    };
    if( aux.length === 0 ){
        return [];
    } else {
        return aux;
    };
};

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']