function getAllLetters(str) {
    // your code here
    let aux = [];
    for(let i=0;i<str.length;i++){
        aux.push(str[i]);
    }
    return aux;
}
let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']