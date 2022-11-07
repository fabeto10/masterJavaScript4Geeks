function computeProductOfAllElements(arr) {
  // your code here
  let aux = 1;
  if( arr.length === 0 ){
      return 0;
  };
  for( let i of arr ){
      aux *= i
  };
  return aux;
};

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

