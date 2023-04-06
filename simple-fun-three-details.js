// https://www.codewars.com/kata/58c212c6f130b7c4660000a5/solutions/javascript

function threeDetails(n) {
    if (n < 3) 
      return 0;
      
    if (n === 3) 
      return 1;
    
    let m = n / 2 | 0;
      
    if (n % 2 === 0)
      return 2 * threeDetails(m);
      
    return threeDetails(m + 1) 
         + threeDetails(m);
  }