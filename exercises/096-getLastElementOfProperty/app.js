// Write your function here
  
function getLastElementOfProperty( obj, key ){
    if( obj[key].length === 0 || !obj[key] || !Array.isArray(obj[key]) ){
        return undefined;
    } else {
        return obj[key].pop();
    };
};

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5