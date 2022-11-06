let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if( obj[key].length === 0 ){
        return [];
    } else if( !Array.isArray(obj[key]) ){
        return [];
    } else if( !obj.hasOwnProperty(key) ){
        return [];
    };
    let aux = [];
    for( let i of obj[key] ){
        if( i.length %2 === 0){
            aux.push(i);
        };
    };
    if( aux.length === 0 ){
        return [];
    } else return aux;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']