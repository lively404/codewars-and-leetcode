// https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript

function giveChange(amount) {
    let change = [];
    let denominations = [100,50,20,10,5,1];
    for( den of denominations){
      console.log(den, amount, amount%den);
      let num = Math.floor(amount/den);
      change.unshift(num);
      amount = amount - num*den;
    }
    return change;
  }