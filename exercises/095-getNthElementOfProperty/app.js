// Write your function here
function getNthElementOfProperty(obj, key, n){
    if( !Array.isArray(obj[key]) ){
        return undefined;
    } else if( !obj[key] ){
        return undefined;
    };
     
    for( let i in obj){
        if( obj[i].length === 0 ){
            return undefined;
        } else if( n > obj[i].length ){
            return undefined;
        };
    };

    for( let i = 0 ; i < obj[key].length ; i++ ){
        if( i === n ){
            return obj[key][i]; 
        };
    };

};

let obj = {
  key: [1, 2, 6]
};
let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2