function squareElements(arr) {
  // your code here
  let aux = [];
  for( let i of arr){
      aux.push(i**2);
  };
  return aux;
};

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]