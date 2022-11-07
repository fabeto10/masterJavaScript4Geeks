function getLongestElement(arr) {
    // your code here
    let aux = '';
    if( arr.length === 0){
        return '';
    };
    for( let i of arr){
        if( i.length > aux.length ) aux = i;
    };
    return aux;
};
let output = getLongestElement(['one', 'twoo', 'th']);
console.log(output); // --> 'three'