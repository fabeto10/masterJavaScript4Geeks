function getLargestNumberAmongMixedElements(arr) {
    // your code here
     if( arr.length === 0 ) return 0;
     let auxNum = [];
     for(let i of arr){
        if( typeof i === 'number') auxNum.push(i);
     };
    if( auxNum.length === 0 ) return 0;
    let aux = 0;
    for( let i of auxNum ){
        if( i > aux ) aux = i;
    };
    return aux;
};

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5