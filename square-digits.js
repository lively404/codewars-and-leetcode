//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let solution = '';
    while(num){
      let remainder = num %10;
      solution = (remainder*remainder).toString()+solution;
      num = (num - remainder)/10;
    }
    return Number(solution);
  }
  
  
  // convert number to string? Adds overhead.
  // running a for loop and removing each digit, squaring it and adding it would likely be the solution.