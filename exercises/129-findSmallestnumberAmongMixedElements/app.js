function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if( arr.length === 0 ) return 0;
  let aux = [];
  for( let i of arr ){
      if( typeof i === 'number' ){
          aux.push(i);
      };
  };
  let minNum = aux[0];
  let result = 0;
  for(let i of aux ){
      if( i <= minNum){
        result = i;
      };
  };
  return result;
};

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4