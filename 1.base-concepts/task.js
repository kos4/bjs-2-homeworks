"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / (100 * 12);
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percentMonth + (percentMonth / ((Math.pow(1 + percentMonth, countMonths) - 1))));
  let totalSum = monthlyPayment * countMonths;
  totalSum = Number(totalSum.toFixed(2));

  return totalSum;
}