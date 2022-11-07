function findShortestWordAmongMixedElements(arr) {
    // your code here
    if( arr.length === 0){
        return '';
    };
    let aux1 = [];
    for( let i of arr){
        if( typeof(i) === 'string' ){
            aux1.push(i);
        };
    };
    if( aux1.length === 0 ){
        return '';
    };
    let aux2 = aux1[0];
    for( let i of aux1 ){
        if( i.length < aux2.length ) aux2 = i;
    };
    return aux2;
};
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'