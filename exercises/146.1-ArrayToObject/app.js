function transformFirstAndLast(array) {
  // your code here
    let first = array.shift();
    let last = array.pop();
    let obj = {};
    obj[first] = last; 
    return obj;
};

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }

output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // { Kevin: "Spacey" }