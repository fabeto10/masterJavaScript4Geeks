let newArr = [];
function getElementsAfter(array, n) {
  // your code here
    for( let i = 0; i < array.length; i++ ){
        if( i > n){
            newArr.push(array[i]);
        };
    };
    return newArr;
};

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']