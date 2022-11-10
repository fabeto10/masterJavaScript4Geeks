let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
function addFullNameProperty(obj) {
  // Add your code after this line
    obj.fullName = obj.firstName + " " + obj.lastName;
    return obj;
};

let output = addFullNameProperty(person);
console.log(output); // --> 'Jade Smith'