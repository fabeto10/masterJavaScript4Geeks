function sumDigits(num) {
    // your code here
    let str = num.toString();
    let aux = 0;
    let result = [];
    for( let i = 0 ; i < str.length ; i ++ ){
        if( str[i] === '-' ){
            let aux2 = str[i] + str[i + 1];
            aux2 = Number(aux2);
            result.push(aux2);
        } else {
            result.push(Number(str[i]));
        };
    };
    let newArr = [];
    let newAux2 = 0;
    if( Math.sign(result[0]) === -1){
        for( let i = 0 ; i < result.length ; i ++){
            if( Math.sign(result[i]) === -1 ){
                newArr.push(result[i]);
            } else if( i !== 1){
                newArr.push(result[i]);
            };
        };
    } else {
        for(let i of result){
            newAux2 += i;
        };
        return newAux2;
    };
    let newAux = 0
    for( let i of newArr ){
        newAux += i;
    };
    return newAux;
};

let output = sumDigits(1148);
console.log(output); // --> 14

output = sumDigits(-316);
console.log(output); // --> 4