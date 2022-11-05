2// Write your function here
let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};


function select(array, object) {
    let newObject = new Object();
    for( let i of array ){
        if( object[i] ){
            newObject[i] = object[i]
        };
    };
    return newObject;
};
// select(arr, obj)
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }