let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
        return 0;
    };
    let num = 0;
    for( let i of obj[key] ){
        num += i;
    };
    return num;
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13