// Write your function here
function removeElement(arr, item){
    let aux = [];
    for(let i of arr){
        if( i !== item){
            aux.push(i);
        }
    }
    return aux
};

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]