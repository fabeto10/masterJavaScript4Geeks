function getLongestWordOfMixedElements(arr) {
    // your code here
    if( arr.length === 0 ) return "";
    let aux = [];
    for( let i of arr ){
        if( typeof i === 'string') aux.push(i);
    };
    if(aux.length === 0) return '';
    let aux1 = '';
    for(let i of aux){
        if(i.length > aux1.length ) aux1 = i;
    };
    return aux1;
};

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'