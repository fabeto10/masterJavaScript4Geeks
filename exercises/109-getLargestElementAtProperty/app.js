let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length === 0 || !Array.isArray(obj[key])){
        return [];
    };
    for( let i of obj[key] ){
        if( i === Math.max.apply(null, obj[key]) ){
            return i;
        };
    };
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4