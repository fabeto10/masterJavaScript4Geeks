function countCharacter(str, char) {
    // your code here
    let aux = '';
    for(let i = 0; i < str.length ; i ++){
        if( str[i] == char ){
            aux += str[i]
        }
    }
    return aux.length;
}

// countCharacter('I am a hacker', 'a');
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3