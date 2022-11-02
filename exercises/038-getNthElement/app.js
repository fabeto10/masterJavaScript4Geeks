function getNthElement(array, n) {
  // Add your code after this line
    for(let i = 0; i < array.length; i++ ){
        if( i === n ){
            return array[i];
        } 
    }
}
let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3