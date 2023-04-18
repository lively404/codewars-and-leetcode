// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    if(n===1) return 1
    let count = 2;
      for(let i = 2; i <= n/2; i++){
        if(n%i===0) count++;
      }
    return count;
  }