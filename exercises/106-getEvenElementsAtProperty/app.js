
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] ){
        return [];
    } else if( !Array.isArray(obj[key]) ){
        return [];
    } else if( obj[key].length === 0 ){
        return [];
    };
    let aux = [];
    for( let i of obj[key] ){
        if( i % 2 === 0 ){
            aux.push(i);
        };
    };

    if( aux.length === 0){
        return [];
    } else return aux;
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]