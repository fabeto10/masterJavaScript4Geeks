let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    // your code here
    for( let prop in obj ){
        if( typeof obj[prop] === 'string'){
            delete obj[prop];
        };
    };
    return obj;
};

removeStringValues(obj);
console.log(obj); // { age: 20 }
