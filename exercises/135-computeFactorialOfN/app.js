function computeFactorialOfN(n) {
    if(n < 0){
        return -1;
    } else if( n == 0){
        return 1;
    } else {
        return ( n * computeFactorialOfN(n-1));
    };
};

let output = computeFactorialOfN(3); console.log(output); // --> 6