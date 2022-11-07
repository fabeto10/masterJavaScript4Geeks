let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let aux = 1;
    if( !obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
        return 0;
    } else {
        for( let i of obj[key] ){
            aux *= i;
        };
    };
    return aux;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24