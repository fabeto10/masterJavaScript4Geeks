let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for( let prop in obj ){
        if( obj[prop] > num ){
            delete obj[prop];
        };
    };
    return obj;
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }