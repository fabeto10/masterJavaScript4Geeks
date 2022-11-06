// Write your function here

function getOddLengthWordsAtProperty( obj, key ){
    if( obj[key].length === 0 ){
        return [];
    } else if( !Array.isArray(obj[key])){
        return [];
    } else if( !obj.hasOwnProperty(key) ){
        return [];
    };
    let aux = [];
    for( let i of obj[key] ){
        if( i.length %2 !== 0 ){
            aux.push(i);
        };
    };

    if( aux.length === 0){
        return [];
    } else {
        return aux;
    };
};

let obj = {
  key: ['It', 'has', 'some', 'words']
};
let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']