function removeNumberValues(obj) {
    // your code here
    for( let prop in obj ){
        if( typeof obj[prop] === 'number'){
            delete obj[prop];
        };
    };
    return obj;
};

let obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }


// let objective = {
//     a: 2,
//     b: 'remaining',
//     c: 4
// };
// function removeNumberValues(obj) {
//     // your code here
//     const globalVar = Object.assign({}, obj);
//     console.log(globalVar)
//     let aux = [];
//     let change = Object.values(obj);
//     let result = change.filter( param => Number(param) !== param ? aux.push(param) : false );
//     return result;
// };