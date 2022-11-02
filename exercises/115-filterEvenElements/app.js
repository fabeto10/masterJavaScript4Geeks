
function filterEvenElements(arr) {
    // your code here
    let aux = [];
    for(let i of arr){
        if( i % 2 === 0){
            aux.push(i)
        }
    }
    return aux;
};

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
