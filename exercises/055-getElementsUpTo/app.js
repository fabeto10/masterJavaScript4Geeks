function getElementsUpTo(array, n) {
  // your code here
  let newArr = [];
  for( let i = 0 ; i < array.length ; i ++){
      if( i < n){
          newArr.push(array[i])
      }
  }
  return newArr
}
let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']