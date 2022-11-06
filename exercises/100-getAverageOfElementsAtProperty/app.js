function getAverageOfElementsAtProperty(obj, key) {
  // your code here
    if( obj[key].length === 0 ){
        return 0;
    } else if( !Array.isArray(obj[key])){
        return 0;
    } else if( !obj.hasOwnProperty(key) ){
        return 0;
    };
    let aux = 0;
    for( let i of obj[key] ){
        aux += i;
    };
    return aux/obj[key].length;
};

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  