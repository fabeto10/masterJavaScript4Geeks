function multiplyBetween(num1, num2) {
    // Your code here
    if( num2 < num1 ) return 0;
    let aux = 1;
    for( let i = num1 ; i < num2 ; i ++ ){
        if( i < num2 ){
            aux *= i;
        };
    };
    return aux
};

let output = multiplyBetween(2, 5);
console.log(output); // --> 24