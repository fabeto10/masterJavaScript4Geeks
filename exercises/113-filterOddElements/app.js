function filterOddElements(arr) {
  // your code here
  let aux = [];
  for( let i of arr){
      if( i % 2 !== 0 ){
          aux.push(i);
      };
  };
  return aux;
};

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]