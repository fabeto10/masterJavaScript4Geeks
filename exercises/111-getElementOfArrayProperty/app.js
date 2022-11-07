let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if( !obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0 ){
        return undefined;
    };

    for( let i = 0; i < obj[key].length ; i++){
        if( i === index ){
            return obj[key][i];
        };
    };
};

let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'