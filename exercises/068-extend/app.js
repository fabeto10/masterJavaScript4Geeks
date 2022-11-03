let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for(let prop in obj2){
        if(!obj1[prop]){
            obj1[prop] = obj2[prop];
        }
    }
}
extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}