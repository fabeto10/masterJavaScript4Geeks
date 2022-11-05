// Write your function here

function getElementsLessThan100AtProperty(obj, key){
    let newArr = [];
    for( let i in obj ){
        if( !Array.isArray(obj[key]) ){
            return [];
        } else if( !obj[key] ){
            return [];
        } else {
            newArr = obj[i];
        };
    };
    let aux = [];
    let aux2 = [];
    for( let i of newArr ){
        if(newArr.length === 0){
            return [];
        } else if( i < 100 ){
            aux2.push(i);
        } else if(aux2.length === 0){
            return [];
        };
    };
    return aux2;
};

let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]