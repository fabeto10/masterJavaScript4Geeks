// Write your function here
let obj = {
  key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(obj, key){
    let aux = 0;
    if( obj[key] === [] ){
        return 0;
    } else if( !Array.isArray(obj[key]) ){
        return 0;
    } else if( !obj[key] ){
        return 0;
    } else{
        for( let index of obj[key] ){
            aux += index;
        }
        let result = aux/obj[key].length;
        return result;
    }
    // let aux = 0;
    // for(let prop in obj ){
    //     if( obj[prop] === []){
    //         return 0;
    //     } else if( !Array.isArray(obj[prop]) ){
    //         return 0;
    //     } else if(!prop){
    //         return 0;
    //     } else {
            
    //     };
    //     return aux;
    // };
    // for( let i of obj[prop] ){
    //     aux += i;
    // }
    // return aux;
};

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2