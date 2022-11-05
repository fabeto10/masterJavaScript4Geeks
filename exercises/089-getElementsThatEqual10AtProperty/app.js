let obj = {
  key: [1000, 10, 50, 10]
};
// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    let newArr = [];
    let aux = [];
    for(let i in obj){
        if( !Array.isArray(obj[i])){
            return [];
        } else if( !obj[key] ){
            return [];
        } else if( obj[i].length == 0 ){
            return [];
        } else {
            newArr = obj[i];
        };
    };
    for(let i of newArr){
        if( i === 10 ){
            aux.push(i);
        };
    };
    if( aux.length == 0 ){
        return [];
    } else {
        return aux;
    };
};


// getElementsThatEqual10AtProperty(obj, 'key');
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]