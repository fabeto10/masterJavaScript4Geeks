function getLargestElement(arr) {
  // your code here
    if( arr.length === 0 ) return 0;
    let aux = 0;
    for( let i of arr){
        if( i > aux ){
            aux = i;
        };
    };
    return aux;
};

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;