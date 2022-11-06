function filterEvenLengthWords(words) {
    // your code here
    return words.filter( p => p.length % 2 === 0 );
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']