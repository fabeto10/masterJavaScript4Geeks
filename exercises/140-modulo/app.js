function modulo(num1, num2) {
    // your code here
    if( num1 === NaN || num2 === NaN) return NaN;
    let div = num1 / num2;
    let str = div.toString();
    let aux = str.split('');
    let newIndex = 0;
    for( let i = 0 ; i < aux.length ; i ++ ){
        if( aux[i] === "." ){
            newIndex = i;
        };
    };
    let aux2 = [];
    let arrInt = [];
    for( let i = 0; i < aux.length ; i ++ ){
        if( i > newIndex){
            aux2.push( aux[i] );
        } else if( i < newIndex ){
            arrInt.push( aux[i] );
        };
    };
    let nega = '';
    for( let i of arrInt ){
        if( i === '-'){
            nega = i;
        };
    };
    let newStr = arrInt.join('');
    let whole = Number(newStr); 
    let aux3 = aux2.join('');
    let aux4 = nega +'0.'+aux3;
    let newNum = Number(aux4);
    return num2 * newNum;
};

let output = modulo(25, 4);
console.log(output); // --> 1