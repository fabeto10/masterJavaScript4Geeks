let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if(  !obj[key]){
        return [];
    } else if( !Array.isArray(obj[key]) ){
        return [];
    } else if( obj[key].length === 0 ){
        return [];
    };
    let aux = [];
    for( let i of obj[key] ){
        aux.push(i**2);
    };
    return aux;
};

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]