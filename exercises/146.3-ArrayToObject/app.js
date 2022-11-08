function transformEmployeeData(array) {
  // your code here
  let obj = {};
  for(let i = 0 ; i < array.length ; i++ ){
      obj[array[i][0]] = array[i][1];
    //   for(let j = 0 ; j < i.length ; j++){
    //       return j;
    //   }
  };
  return obj;
};

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]