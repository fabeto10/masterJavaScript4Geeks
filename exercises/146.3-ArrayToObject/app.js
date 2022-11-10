function transformEmployeeData(array) {
  // your code here
    let result = [];
    for(let i of array){
        let aux = {};
        for(let j of i ){
            aux[j[0]] = j[1];
        };
        result.push(aux);
    };
    return result;
};

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]