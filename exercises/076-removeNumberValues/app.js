let objective = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    const globalVar = Object.assign({}, obj);
    console.log(globalVar)
    let aux = [];
    let change = Object.values(obj);
    let result = change.filter( param => Number(param) !== param ? aux.push(param) : false );
    return result;
};
console.log(removeNumberValues(objective)); // --> { b: 'remaining' }