let myObj = {};
function addProperty(obj, key) {
  // your code here
    obj[key] = true;
    myObj[key] = obj[key];
    return myObj;
};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true