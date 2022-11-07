function getStringLength(string) {
    // your code here
    let aux = 0;
    for( let i of string){
        if( i === i ){
            aux += 1;
        };
    };
    return aux;
};

let output = getStringLength('hello');
console.log(output); // --> 5