// Write your function here
function getFirstElementOfProperty(obj, key){
    if( !obj[key] ){
        return undefined;
    } else if( !Array.isArray(obj[key]) ){
        return undefined;
    } else if( obj[key].length === 0 ){
        return undefined;
    } else {
        return obj[key].shift();
    };

};

let obj = {
  key: [1, 2, 4]
};
let output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
