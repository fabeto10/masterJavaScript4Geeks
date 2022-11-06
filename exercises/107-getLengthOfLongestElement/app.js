function getLengthOfLongestElement(arr) {
    // Your code here
    if( arr.length === 0 ){
        return 0;
    };
    let aux = [];
    for( let i of arr){
        aux.push(i.length);
    };
    for( let i of arr ){
        if( i.length === Math.max.apply(null, aux)){
            return i.length;
        };
    };
};

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5