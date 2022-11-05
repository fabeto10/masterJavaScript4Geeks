// Write your function here
function removeElement(arr, item){
    let aux = [];
    for( let i of arr ){
        if( arr.length === 0 ){
            return [];
        } else if( i !== item){
            aux.push(i);
        };
    };
    if( aux.length === arr.length ){
        return [];
    };
    return aux;
};

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]