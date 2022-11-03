function joinThreeArrays(arr1, arr2, arr3) {
    // your code here
    let both = arr1.concat(arr2);
    return both.concat(arr3);
}

let output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]