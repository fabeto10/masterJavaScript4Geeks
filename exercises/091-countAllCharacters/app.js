// Write your function here
function countAllCharacters(str){
    let newObj = new Object();
    
    if( str.length == 0){
        return {};
    };

    for( let i = 0 ; i < str.length ; i ++ ){
        if( newObj[str[i]] ){
            newObj[str[i]] = newObj[str[i]] + 1;
        } else{
            newObj[str[i]] = 1;
        };
    };

    return newObj;

};

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}