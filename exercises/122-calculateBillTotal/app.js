function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = preTaxAndTipAmount * 0.095;
    let tip = preTaxAndTipAmount * 0.15;
    let total = tax + tip + preTaxAndTipAmount;
    return total;   
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9