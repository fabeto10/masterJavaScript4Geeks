let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
    let greeting1 = "Welcome! Is this your first time?";
    let greeting2 = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    let greeting3 = `Welcome back, ${firstName}! So glad to see you again!`;
    // your code here
    if( !customerData[firstName]){
        return greeting1;
    } else if( Object.values(customerData[firstName]) == 1){
        return greeting2;
    } else if( Object.values(customerData[firstName]) > 1) {
        return greeting3;
    };
};
let output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

output1 = greetCustomer('Terrance');
console.log(output1); // --> 'Welcome! Is this your first time?'

output2 = greetCustomer('Joe');
console.log(output2); // --> 'Welcome back, Joe! We're glad you liked us the first time!'