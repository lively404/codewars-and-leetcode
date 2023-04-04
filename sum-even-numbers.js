// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
    return input.length>0?input.filter(e=>e%2==0).reduce((a,e)=>a+e):0;
  }