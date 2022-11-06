let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    if( !obj[key] ){
        return [];
    } else if( !Array.isArray(obj[key]) ){
        return [];
    } else if( obj[key].length === 0 ){
        return [];
    };
    for(let i of obj[key] ){
        if( i === Math.min.apply(null, obj[key])){
            return i;
        };
    };
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1