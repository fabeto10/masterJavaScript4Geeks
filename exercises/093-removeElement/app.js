// Write your function here
function removeElement(arr, param){
    let result = arr.filter( array => array != param);
    for( i of arr){
        if( arr == []){
           return []; 
        } else if( i === param ){
            return [];
        } else{
            return result
        }
    };
    
};

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]