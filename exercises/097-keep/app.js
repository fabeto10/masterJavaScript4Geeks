// Write your function here

function keep(arr, item){
    let aux = new Array();
    for( let i of arr ){
        if( i === item ){
            aux.push(i);
        };
    };
    if( aux.length === 0){
        return [];
    } else {
        return aux;
    }
};

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // [2, 2]