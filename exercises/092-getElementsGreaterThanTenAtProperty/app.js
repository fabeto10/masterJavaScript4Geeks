// Write your function here
function  getElementsGreaterThan10AtProperty(obj, key){
    let newArr = [];
    for( let i in obj ){
        if( !Array.isArray(obj[i]) ){
            return [];
        } else if( !obj[i] ){
            return [];
        };
        newArr = obj[i];
    }
    let aux = [];
    for( let i of newArr ){
        if( newArr.length === 0){
            return [];
        } else if( i > 10 ){
            aux.push(i);
        };
    };
    if(aux.length === 0){
        return [];
    } else {
        return aux;
    };
};

let obj = {
  key: [1, 20, 30]
};

let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]