function convertObjectToList(obj) {
  // your code here
  let aux = [];
  for( let i in obj ){
      aux.push([i, obj[i]]);
  };
  return aux;
};

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]
