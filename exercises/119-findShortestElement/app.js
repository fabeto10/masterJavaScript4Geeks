function findShortestElement(arr) {
    // your code here
    let aux = '';
    if( arr.length === 0){
        return '';
    };
    let num = []
    for( let i of arr ){
        num.push(i.length);
    };
    for( let i of arr ){
        if( i.length === Math.min.apply(null, num) ){
            return i;
        };
    };
};

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'